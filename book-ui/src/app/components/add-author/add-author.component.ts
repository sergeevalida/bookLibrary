import { Component, OnInit } from '@angular/core';
import {BookService} from '../../services/book.service';
import {AuthorService} from '../../services/author.service';
import { FormGroup, FormControl,Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})

export class AddAuthorComponent implements OnInit {

authorform: FormGroup;
  validMessage: string = "";

  constructor(private bookService:BookService,private authorService:AuthorService) {}
  ngOnInit() {
    this.authorform = new FormGroup({
      name: new FormControl('',Validators.required),
      surname: new FormControl('',Validators.required),
      contact: new FormControl()
    });
  }

  submitRegistration() {
    if (this.authorform.valid){
      this.validMessage="Author was added to list of authors!";
      this.authorService.createAuthorRegistration(this.authorform.value).subscribe(
        data=>{
          this.authorform.reset();
          return true;
        },
        error=>{
          return Observable.throw(error);
        }
      )
    } else {
      this.validMessage = "Please fill out the form before submitting!";
    }
  }

}

