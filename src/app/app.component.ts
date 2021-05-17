import {Component, OnInit} from '@angular/core';
import {ApiService} from "./core/api.service";
import {Namespace, ServiceQuery} from "./core/data";

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

    let link = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      link.type = 'image/x-icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = 'cryptic-favicon.ico';

    this.apiService.loadData(cryptic ? 'cryptic' : 'morpheus');
  }
}
