import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CustomerListComponent } from "./components/customer-list/customer-list.component";
import { CustomerAddComponent } from "./components/customer-add/customer-add.component";
import { NavbarComponent } from "./navbar/navbar.component";


@Component({
  
  selector: 'app-root',
  imports: [CommonModule, NavbarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  
  styleUrl: './app.component.css',
  providers: [],
})
export class AppComponent {
 /*[x: string]: any;*/
  title = 'fullstack';
  // customer: any;
  
}
