import { Component, Input } from '@angular/core';
import { ServiceQuery, Status } from '../core/data';
import { ApiService } from '../core/api.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent {
  @Input()
  service!: ServiceQuery;

  constructor(private readonly apiService: ApiService) {}

  get data(): Status[] | undefined {
    return this.apiService.getData(this.service.id);
  }

  get state(): 'operational' | 'incident' | 'no-data' {
    return this.apiService.getCurrentStatus(this.service.id);
  }
}
