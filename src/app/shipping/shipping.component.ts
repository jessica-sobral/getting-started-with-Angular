import { Component } from '@angular/core';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent {

  // Injetando o serviço de carrinho no ShippingComponent.constructor()
  constructor(
    private cartService: CartService
  ) { }

  // Definindo uma propriedade shippingCosts usando o método CartService.getShippingPrices()
  shippingCosts = this.cartService.getShippingPrices();

}
