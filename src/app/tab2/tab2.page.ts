import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonIcon, IonFooter, IonSpinner, IonButtons } from '@ionic/angular/standalone';
import { ProductService } from '../services/product.service';
import { addIcons } from 'ionicons';
import { arrowBackOutline, arrowForwardOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonIcon, IonFooter, IonSpinner, IonButtons],
})
export class Tab2Page implements OnInit {
  products: any[] = [];
  currentIndex: number = 0;

  constructor(private productService: ProductService) {
    addIcons({ arrowBackOutline, arrowForwardOutline });
  }

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  nextProduct() {
    if (this.currentIndex < this.products.length - 1) {
      this.currentIndex++;
    }
  }

  previousProduct() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
