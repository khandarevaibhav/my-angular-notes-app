import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from 'src/app/shared/note.model';
import { NotesService } from 'src/app/shared/notes.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

  // i!: number;
  // cardTitle:string = 'abc';
  // todayTitle:string = 'RTO Task';
  @Output() link:any;
  notes:Note[]=new Array<Note>(); 
  constructor (private noteServices:NotesService, private router: Router) {}

  

  ngOnInit(){
    this.notes = this.noteServices.getAll();

  }
  fetchNotes() {
    this.notes = this.noteServices.getAll();
  }

  test(i: number) {
    console.log(i);
    this.router.navigateByUrl(`/${i}`)
    
  }
  deleteNote(id:number){
    this.noteServices.delete(id)
    this.fetchNotes();
    // this.router.navigateByUrl('/')
  }

}
