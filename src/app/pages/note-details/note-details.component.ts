import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Note } from 'src/app/shared/note.model';
import { NotesService } from 'src/app/shared/notes.service';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit  {

  note!: Note;
  noteId!: number;
  new!: boolean;
  
  constructor(private notesService: NotesService, private router:Router, private route:ActivatedRoute){}

  ngOnInit() {
    //we want to find out if we are creating a new note or editing existing one
    this.route.params.subscribe((params: Params) =>{
      this.note = new Note();
      console.log(params['id'])
      if(params['id']){
        this.note = this.notesService.get(params['id']);
        this.noteId = params['id'];
        this.new = false;
        
      }
      else{
        this.new = true;
      }
    })
    //this one we need to place above the if block because it store the data i.e this.note 
    // this.note=new Note();
    
  }

  onSubmit(form: NgForm){
 
    if(this.new){
      //we need to save the note
      console.log(form);
    this.notesService.add(form.value);
    // this one we need to shift outside if else  
    //this.router.navigateByUrl('/');

    }else{
      this.notesService.update(this.noteId, form.value.title, form.value.body)
    }
    this.router.navigateByUrl('/');
    
  }
  cancel(){
    this.router.navigateByUrl('/');
  }
}
