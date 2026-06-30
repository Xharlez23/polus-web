import { Component, Input } from '@angular/core';
import { Process } from '../../models/process.model';

@Component({
  selector: 'app-process-card',
  standalone: true,
  imports: [],
  templateUrl: './process-card.html',
  styleUrl: './process-card.scss'
})
export class ProcessCard {

  @Input({required:true})
  process!: Process;

}