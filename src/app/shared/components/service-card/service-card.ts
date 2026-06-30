import { Component, Input } from '@angular/core';
import { Service } from '../../models/service.model';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [],
  templateUrl: './service-card.html',
  styleUrl: './service-card.scss'
})
export class ServiceCard {

  @Input({ required: true })
  service!: Service;

}