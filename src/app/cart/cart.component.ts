// Este código define os itens CartService usando o método getItems()

import { Component } from '@angular/core';
// Importando o serviço FormBuilder do pacote @angular/forms
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  // Definindo a propriedade items para armazenar os produtos no carrinho
  items = this.cartService.getItems();

  // Reunindo o nome e o endereço do usuário utilizando o método FormBuilder.group() para definir a propriedade checkoutForm para um modelo de formulário contendo os campos name e address
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  })

  // Injetando o CartService e o serviço FormBuilder (faz parte do módulo ReactiveFormsModule) para que o CartComponent possa usá-los adicionando-o ao constructor()
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) { }

  // Definindo um método onSubimit() para processar o formulário e permitir que os usuários enviem seu nome e endereço
  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

}
