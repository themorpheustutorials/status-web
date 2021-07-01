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
    const brand = this.getBrand();
    const morpheus = brand === 'the-morpheus';

    let link = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
    if (!link && !morpheus) {
      link = document.createElement('link');
      link.rel = 'icon';
      link.type = 'image/x-icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }

    switch (brand) {
      case 'cryptic-game':
        link!.href = 'cryptic-favicon.ico';
        this.apiService.loadData('cryptic');
        break;
      case 'secshell':
        link!.href = 'secshell-favicon.ico';
        this.apiService.loadData('sec_shell');
        break;
      default:
        this.apiService.loadData('morpheus');
    }
  }

  private getBrand(): string {
    const hostname = window.location.hostname;

    let tmp = hostname.substring(0, hostname.lastIndexOf('.'));
    return tmp.substring(tmp.lastIndexOf('.') + 1);
  }
}
