import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonButton, 
  IonButtons, 
  IonBackButton, 
  IonRange, 
  IonItem, 
  IonLabel 
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss'],
  standalone: true,
  imports: [
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonButton, 
    IonButtons, 
    IonBackButton, 
    IonRange, 
    IonItem, 
    IonLabel, 
    CommonModule, 
    FormsModule
  ],
})
export class AboutPage {
  red: number = 0;
  green: number = 0;
  blue: number = 0;

  buttonColor: string = '#3880ff';
  backgroundColor: string = '#ffffff';

  constructor(private router: Router) {}

  updateButtonColor() {
    this.buttonColor = `rgb(${this.red}, ${this.green}, ${this.blue})`;
  }

  updateBackgroundColor() {
    this.backgroundColor = `rgb(${this.red}, ${this.green}, ${this.blue})`;
  }

  goBack() {
    this.router.navigate(['/home']);
  }
}
