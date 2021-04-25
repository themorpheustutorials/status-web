import { Component, OnInit } from '@angular/core';
import { ApiService } from "./core/api.service";
import { Namespace, ServiceQuery } from "./core/data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private readonly apiService: ApiService
  ) {
  }

  get namespace(): Namespace | undefined {
    return this.apiService.namespace;
  }

  get services(): ServiceQuery[] | undefined {
    return this.apiService.services;
  }

  ngOnInit(): void {
    const cryptic = window.location.hostname.includes('cryptic');

    this.apiService.loadData(cryptic ? 'cryptic' : 'morpheus');
  }
}
