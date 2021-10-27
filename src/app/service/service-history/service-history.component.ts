import { Component, Input } from '@angular/core';
import { Status } from '../../core/data';

@Component({
  selector: 'app-service-history',
  templateUrl: './service-history.component.html',
  styleUrls: ['./service-history.component.scss'],
})
export class ServiceHistoryComponent {
  @Input()
  serviceId!: string;

  @Input()
  data?: Status[];
}
