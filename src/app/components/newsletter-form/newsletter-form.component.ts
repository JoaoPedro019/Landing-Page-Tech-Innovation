import { NewsletterService } from './../../services/newsletter.service';
import { Component, signal } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'newsletter-form',
  standalone: true,
  imports: [BtnPrimaryComponent, ReactiveFormsModule],
  providers: [NewsletterService],
  templateUrl: './newsletter-form.component.html',
  styleUrl: './newsletter-form.component.scss',
})
export class NewsletterFormComponent {
  formulario!: FormGroup;
  carregando = signal(false);

  constructor(private service: NewsletterService) {
    this.formulario = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onSubmit() {
    this.carregando.set(true);
    if(this.formulario.valid){
      this.service.sendData(this.formulario.value.nome, this.formulario.value.email).subscribe({
          next: () => {
            this.formulario.reset
            this.carregando.set(false)
          }
        }
      )
    }
  }
}
