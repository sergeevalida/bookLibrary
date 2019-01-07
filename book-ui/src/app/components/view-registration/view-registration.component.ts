import { Component, OnInit } from '@angular/core';
import {BookService} from '../../services/book.service';
import {AuthorService} from '../../services/author.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {

  public bookReg;
  //public authorReg;

  constructor(private bookService: BookService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.getBookReg(this.route.snapshot.params.bookId);
  }

  getBookReg(bookId:number) {
    this.bookService.getBook(bookId).subscribe(
      data=>{
        this.bookReg=data;
      },
      err=>console.error(err),
      ()=>console.log('book loaded')
    );
  }

 }


