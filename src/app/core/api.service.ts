import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ApiResponse, LOCATIONS, Namespace, ServiceQuery, Status, StatusLocation } from "./data";
import { environment } from "../../environments/environment";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private static readonly HISTORY_DAYS = 90;
  private static readonly MS_PER_DAY = 1000 * 60 * 60 * 24;
  private static readonly HISTORY_MS = ApiService.HISTORY_DAYS * ApiService.MS_PER_DAY;
  private data0?: ApiResponse;

  constructor(
    private readonly httpClient: HttpClient
  ) {
  }

  get namespace(): Namespace | undefined {
    return this.data0?.namespace;
  }

  get services(): ServiceQuery[] | undefined {
    return this.data0?.namespace.services;
  }

  private static timeToDate(time: number): string {
    return new Date(time).toISOString().split('T')[0];
  }

  public getData(serviceId: string): Status[] {
    const service = this.data0?.services?.find(s => s.id === serviceId);
    if (!service) {
      return [];
    }

    const status: Status[] = [];

    let date = Date.now() - ApiService.HISTORY_MS;
    for (let i = 0; i < ApiService.HISTORY_DAYS; i++) {
      date += ApiService.MS_PER_DAY;
      const currDate = ApiService.timeToDate(date);

      const pings = service.ping.filter(p => p.date == currDate);
      const ping: StatusLocation[] = pings.map(p => {
        // if (!p.pingAvg) {
        //   throw new Error('Unexpected data!');
        // }

        return {
          ping: p.pingAvg || -1,
          location: p.location
        }
      });

      const incident = pings.find(p => !p.operational)
      const operational = pings.find(p => p.operational)

      status.push({
        date: date,
        locations: ping,
        state: incident ? 'incident' : operational ? 'operational' : 'no-data'
      })
    }

    return status;
  }

  public getCurrentStatus(serviceId: string): 'incident' | 'operational' | 'no-data' {
    const service = this.data0?.services?.find(s => s.id === serviceId);
    if (!service) {
      return 'no-data';
    }

    return service.incidents.find(i => !i.endTime) ? 'incident' : 'operational';
  }

  public loadData(namespace: string): void {
    this.httpClient.get<ApiResponse>(`${environment.api}?namespace=${namespace}`)
      .pipe(tap(data => {
        data.services.forEach(s => s.ping.forEach(p => p.location = LOCATIONS[p.location]))
      }))
      .subscribe(data => this.data0 = data);
  }
}
