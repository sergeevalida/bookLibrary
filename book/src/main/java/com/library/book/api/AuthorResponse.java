package com.library.book.api;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import com.library.book.models.Author;
import com.library.book.models.Book;

public class AuthorResponse {
	private Long authorId;
	private String name;
	private String surname;
	private List<BookResponse> books = new ArrayList<>();
	
	public AuthorResponse(Author author){
		this(author, false);
	}
	
	public AuthorResponse(Author author, boolean expandBooks){
		this.authorId = author.getAuthorId();
		this.name = author.getName();
		this.surname = author.getSurname();
		if (expandBooks) {
			for (Book book: author.getBooks()){
				this.books.add(new BookResponse(book));
			}
		}
	}
	
	public Long getAuthorId() {
		return authorId;
	}
	public void setAuthorId(Long authorId) {
		this.authorId = authorId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSurname() {
		return surname;
	}
	public void setSurname(String surname) {
		this.surname = surname;
	}

	public List<BookResponse> getBooks() {
		return books;
	}

	public void setBooks(List<BookResponse> books) {
		this.books = books;
	}
}
