
import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-benefic-card',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './benefic-card.component.html',
  styleUrl: './benefic-card.component.scss',
})
export class BeneficCardComponent {
  @Input("img-path") imgPath: string = '';
  @Input("card-title") cardTitle: string = '';
  @Input("card-description") cardDescription: string = '';
}
