import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  [x: string]: any;
  title = 'colorGame';
  user={
name:"sonu",
email:"sonu@gmail.com",
dob :"03.05.2002",
gender :"male",
pan  :"jsxp0356k"
 
  }
   
  ngOnInit(): void {
    localStorage.setItem('user',JSON.stringify(this.user));
     
  }
  
}
