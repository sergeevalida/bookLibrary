package com.library.book.controllers;

//import java.util.ArrayList;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.library.book.api.AuthorResponse;
import com.library.book.api.BookRequest;
import com.library.book.api.BookResponse;
import com.library.book.models.Author;
import com.library.book.models.Book;
import com.library.book.repositories.AuthorRepository;
import com.library.book.repositories.BookRepository;

@RestController
@RequestMapping("/api/v1/books")
public class BooksController {

	@Autowired
	private BookRepository bookRepository;
	
	@Autowired
	private AuthorRepository authorRepository;
	
	@GetMapping
	public List<BookResponse> list(){
		List<Book> books = bookRepository.findAll();
		List<BookResponse> responses = new ArrayList<>();
		for (Book book: books){
			responses.add(new BookResponse(book, true));
		}
		return responses;

	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.OK)
	public void create(@RequestBody BookRequest bookRequest) {
		Book book = new Book();
		book.setGenre(bookRequest.getGenre());
		book.setTitle(bookRequest.getTitle());
		book.setYear(bookRequest.getYear());
		HashSet<Author> authors = new HashSet<>();
		
		Long[] authorIds = bookRequest.getAuthorIds(); 
		if (authorIds != null && authorIds.length > 0) {
			for (int i=0; i < authorIds.length; i++) {
				Optional<Author> author = authorRepository.findById(authorIds[i]);
				if (author.isPresent()) {
					authors.add(author.get());					
				}
			}
			book.setAuthors(authors);
		}
		
		bookRepository.save(book);	
	}
	
	@GetMapping("/{bookId}")
	public BookResponse get(@PathVariable("bookId") long bookId){
		Book book = bookRepository.getOne(bookId);
		return new BookResponse(book, true);
	}

}
