import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { CommonModule, NgFor, } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule , } from '@angular/material/button';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Subject } from 'rxjs';
import { MatTableModule } from '@angular/material/table';
import { DataSource } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { AddfundComponent } from '../addfund/addfund.component';
 
export interface PeriodicElement {
 Srno:any;
  BidNo:any;
  Result: any;
  Select:any;
  Output:any;
}
  const ELEMENT_DATA: PeriodicElement[] = [
    { Srno:1, BidNo :1 ,Select : 'R/1',Result:'R/1',Output:'Win'},
    { Srno:1, BidNo :1 ,Select : 'B/5',Result:'R/4',Output:'Loss'},
    { Srno:1, BidNo :1 ,Select : 'R/4',Result:'G/4',Output:'Loss'},
    { Srno:1, BidNo :1 ,Select : 'B/8',Result:'B/8',Output:'Win'},

  ]
@Component({
  selector: 'watchlist',
 
  standalone: true,
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatIconModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    NgFor,
    MatTableModule,

  ],
  
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss'],
})
export class WatchlistComponent implements OnInit {
  [x: string]: any;
  colors: string[] = ['Red', 'Blue', 'Green', ];
  timerExpired: boolean = false ;
  number: string[] =['1','2','3','4','5','6','7','8','9','0']
  numbers: any | undefined | undefined;
  minutes: number = 1;
  seconds: number = 0; // Adjust as needed
  timeLeft: number| undefined;
  display: string | undefined;
  displayText: string = '';
  minutesDisplay: string | undefined;
  secondsDisplay: string | undefined;
  displaycolor: any ='';
  setcolor(color:string){ 
    this.displaycolor = color;
  }
    displaynumber: any ='';
    setNumber(num:string){
      this.displaynumber = num; 
   }
  private ngUnsubscribe = new Subject<void>();
  title = 'Dashboard';
  displayedColumns: string[] = ['Srno', 'BidNo' ,'Result' , 'Select','Output'];
  dataSource = ELEMENT_DATA;
  constructor(public dialog: MatDialog, ) {}

  openPopup(): void {
    const dialogRef = this.dialog.open(AddfundComponent,{
       maxHeight:"80%",
      maxWidth:"100%",
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        // Handle the input value, e.g., update form field
        console.log('Input value:', result);
      }
    });
  }
  ngOnInit(): void {
   this.startTimer();
     
    }
  startTimer(): void {
    let duration = this.minutes * 60 + this.seconds;
    let timer = duration;

    let intervalId = setInterval(() => {
      timer--;

      this.minutes = Math.floor(timer / 60);
      this.seconds = timer % 60;

      // Format minutes and seconds to always display two digits
      this.minutesDisplay = this.minutes < 10 ? '0' + this.minutes : '' + this.minutes;
      this.secondsDisplay = this.seconds < 10 ? '0' + this.seconds : '' + this.seconds;

      if (timer == 0) {
        this.minutes=1
        this.seconds=0
        timer=this.minutes * 60 + this.seconds;
        this.timerExpired = false; 
      }
    
 
      if(timer == 30 ){
        this.timerExpired = true;     
      }
     
    }, 1000);
 
    
  }
  
}

// function sonu() {
//  var name =document.getElementById('name')
//  alert(name);
// }

