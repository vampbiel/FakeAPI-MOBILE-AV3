import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonIcon, IonSpinner } from '@ionic/angular/standalone';
import { ProductService } from '../services/product.service';
import { addIcons } from 'ionicons';
import { cartOutline, eyeOffOutline, eyeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonIcon, IonSpinner],
})
export class Tab3Page implements OnInit {
  products: any[] = [];
  showList: boolean = false;

  constructor(private productService: ProductService) {
    addIcons({ cartOutline, eyeOffOutline, eyeOutline });
  }

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  toggleList() {
    this.showList = !this.showList;
  }
}
