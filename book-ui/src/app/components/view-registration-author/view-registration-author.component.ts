import { Component, OnInit } from '@angular/core';
import {BookService} from '../../services/book.service';
import {AuthorService} from '../../services/author.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view-registration-author',
  templateUrl: './view-registration-author.component.html',
  styleUrls: ['./view-registration-author.component.css']
})
export class ViewRegistrationAuthorComponent implements OnInit {

  //public bookReg;
  public authorReg;

  constructor(private authorService: AuthorService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.getAuthorReg(this.route.snapshot.params.authorId);
  }

  getAuthorReg(authorId:number) {
    this.authorService.getAuthor(authorId).subscribe(
      data=>{
        this.authorReg=data;
      },
      err=>console.error(err),
      ()=>console.log('author loaded')
    );
  }

 }

