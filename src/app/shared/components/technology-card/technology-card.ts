import { Component, Input } from '@angular/core';
import { Technology } from '../../models/technology.model';

@Component({
  selector: 'app-technology-card',
  standalone: true,
  imports: [],
  templateUrl: './technology-card.html',
  styleUrl: './technology-card.scss'
})
export class TechnologyCard {

  @Input({required:true})
  technology!:Technology;

}