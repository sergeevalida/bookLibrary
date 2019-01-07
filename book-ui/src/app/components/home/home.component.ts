import { Component, OnInit } from '@angular/core';
import {BookService} from '../../services/book.service';
import {AuthorService} from '../../services/author.service';
import { FormGroup, FormControl,Validators} from '@angular/forms';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  genres: string[] = [
  'Action and adventure',
  'Art',
  'History',
  'Autobiography',
  'Biography',
  'Children literature',
  'Cookbook',
  'Comic book',
  'Dictionary',
  'Crime',
  'Encyclopedia',
  'Drama',
  'Health',
  'Fantasy',
  'Journal',
  'Math',
  'Horror',
  'Mystery',
  'Poetry',
  'Science',
  'Thriller',
  ];
  bookform: FormGroup;
  validMessage: string = "";
  authors: any[];

  constructor(private bookService:BookService,private authorService:AuthorService) {}

  ngOnInit() {
    this.bookform = new FormGroup({
      title: new FormControl('',Validators.required),
      authorIds: new FormControl('',Validators.required),
      genre: new FormControl('',Validators.required),
      year: new FormControl('',Validators.required),
      contact: new FormControl()
    });
    this.getAuthors();
  }

  getAuthors(){
    this.authorService.getAuthors().subscribe(authors=>{this.authors=authors; console.log(this.authors, 'authors loaded')});
  }
  submitRegistration() {
    if (this.bookform.valid){
      this.validMessage="Book was added to library!";
      this.bookService.createBookRegistration(this.bookform.value).subscribe(
        data=>{
          this.bookform.reset();
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
