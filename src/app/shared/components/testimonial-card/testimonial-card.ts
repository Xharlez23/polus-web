// shared/components/testimonial-card/testimonial-card.ts
import { Component, Input } from '@angular/core';
import { Testimonial } from '../../../features/home/home';

@Component({
  selector: 'app-testimonial-card',
  standalone: true,
  template: `
    <div class="testimonial-card">

      <div class="stars">
        @for(star of stars(testimonial.rating); track $index) {
          <span class="star">★</span>
        }
      </div>

      <p class="message">"{{ testimonial.message }}"</p>

      <div class="author">
        <div class="avatar">{{ initials(testimonial.name) }}</div>
        <div class="info">
          <strong>{{ testimonial.name }}</strong>
          <span>{{ testimonial.role }} · {{ testimonial.company }}</span>
        </div>
      </div>

    </div>
  `,
  styleUrl: './testimonial-card.scss'
})
export class TestimonialCard {
  @Input() testimonial!: Testimonial;

  stars(count: number): number[] {
    return Array(count).fill(0);
  }

  initials(name: string): string {
    return name
      .split(' ')
      .slice(0, 2)
      .map(n => n[0])
      .join('')
      .toUpperCase();
  }
}