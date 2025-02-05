import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  // product1 = { productId: 1, productName: 'Bardak', categoryId: 1, unitPrice: 5, unitsInStock:4 };
  // product2 = { productId: 2, productName: 'Laptop', categoryId: 1, unitPrice: 5, unitsInStock:4 };
  // product3 = { productId: 3, productName: 'Ayakkabı', categoryId: 1, unitPrice: 5, unitsInStock:4 };
  // product4 = { productId: 4, productName: 'Ekran Kartı', categoryId: 1, unitPrice: 5, unitsInStock:4 };
  // product5 = { productId: 5, productName: 'Kahve Makinesi', categoryId: 1, unitPrice: 5, unitsInStock:4 };

  products:Product[] = [];

  // constructor ()  { }

  // ngOnIt(): void{ }
  
}
