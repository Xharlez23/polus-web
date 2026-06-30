import { Component, Input } from '@angular/core';
import { Feature } from '../../models/feature.model';

@Component({
  selector: 'app-feature-card',
  standalone: true,
  imports: [],
  templateUrl: './feature-card.html',
  styleUrl: './feature-card.scss'
})
export class FeatureCard {

  @Input({required:true})

  feature!:Feature;

}