import { Component, ElementRef, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit{

  // @Input('title') title!: string ;
  // @Input('body') body! : string;
  @Input() title : any;
  @Input() body : any;
  @Output() routerLink:any;
  //An ElementRef is backed by a render-specific element
 
  constructor(){}

  ngOnInit(){

    //work out if there is a text overflow and if not, then hide the truncator
    //The getComputedStyle() method gets the computed CSS properties and values of an HTML element.

    

  }






}
