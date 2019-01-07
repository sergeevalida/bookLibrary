import { Component, OnInit } from '@angular/core';
import {BookService} from '../../services/book.service';
import {AuthorService} from '../../services/author.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
public books;
public authors;
  
  constructor(private bookService: BookService, private authorService: AuthorService) { }

  ngOnInit() {
    this.getBooks();
    this.getAuthors();
  }

  getBooks(){
    this.bookService.getBooks().subscribe(
      data=>{this.books=data},
      err=>console.error(err),
      ()=>console.log('books loaded')
    );
  }

  getAuthors(){
    this.authorService.getAuthors().subscribe(
      data=>{this.authors=data},
      err=>console.error(err),
      ()=>console.log('authors loaded', this.authors)
    );
  }
}
