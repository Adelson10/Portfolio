import { Component } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent {
  contatos = [
    {
      icon: 'bi bi-envelope',
      type: 'Email',
      contact: 'barros.adelson101@gmail.com',
      src: 'https://gmail.com'
    },
    {
      icon: 'bi bi-whatsapp',
      type: 'WhatsApp',
      contact: '+55 11 91489-3849',
      src: 'https://api.whatsapp.com/send/?phone=5511914893849&text&type=phone_number&app_absent=0'
    }
  ]
}
