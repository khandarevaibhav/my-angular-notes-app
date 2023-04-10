import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { NotesService } from '../shared/notes.service';
import { Router } from '@angular/router';

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
  @Output() link:any;
  @Output() deleteClicked = new EventEmitter();

  //An ElementRef is backed by a render-specific element
   //to update or navigate to that specific notes created one 

   constructor (private noteServices:NotesService, private router: Router) {}

  ngOnInit(){

    //work out if there is a text overflow and if not, then hide the truncator
    //The getComputedStyle() method gets the computed CSS properties and values of an HTML element.

    
    
  }
  
  deleteNote(){
    this.deleteClicked.emit()
  
    // this.router.navigateByUrl('/')
  }





}
