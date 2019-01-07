package com.library.book.api;

import java.util.ArrayList;
import java.util.List;

import com.library.book.models.Author;
import com.library.book.models.Book;

public class BookResponse {
	private Long bookId;
	private String title;
	private String genre;
	private int year;
	private List<AuthorResponse> authors = new ArrayList<>();
	
	public BookResponse(Book book){
		this(book,false);
	}
	
	
	public BookResponse(Book book, boolean expandAuthors){
		this.bookId = book.getBookId();
		this.title = book.getTitle();
		this.genre = book.getGenre();
		this.year = book.getYear();
		if (expandAuthors)
		for (Author author: book.getAuthors()){
			this.authors.add(new AuthorResponse(author));
		}
	}
	
	public Long getBookId() {
		return bookId;
	}
	public void setBookId(Long bookId) {
		this.bookId = bookId;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getGenre() {
		return genre;
	}
	public void setGenre(String genre) {
		this.genre = genre;
	}
	public int getYear() {
		return year;
	}
	public void setYear(int year) {
		this.year = year;
	}
	public List<AuthorResponse> getAuthors() {
		return authors;
	}
	public void setAuthors(List<AuthorResponse> authors) {
		this.authors = authors;
	}

}
