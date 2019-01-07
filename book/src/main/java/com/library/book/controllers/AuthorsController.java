package com.library.book.controllers;

//import java.util.ArrayList;
import java.util.ArrayList;
import java.util.List;

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
import com.library.book.api.BookResponse;
import com.library.book.models.Author;
import com.library.book.models.Book;
import com.library.book.repositories.AuthorRepository;
import com.library.book.repositories.BookRepository;

@RestController
@RequestMapping("/api/v1/authors")
public class AuthorsController {
	@Autowired
	private AuthorRepository authorRepository;
	
	@GetMapping
	public List<AuthorResponse> list(){
		List<Author> authors = authorRepository.findAll();
		List<AuthorResponse> responses = new ArrayList<>();
		for (Author author: authors){
			responses.add(new AuthorResponse(author, true));
		}
		return responses;
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.OK)
	public void create(@RequestBody Author author){
		authorRepository.save(author);	
	}
	
	@GetMapping("/{authorId}")
	public AuthorResponse get(@PathVariable("authorId") long authorId){
		Author author = authorRepository.getOne(authorId);
		return new AuthorResponse(author, true);
	}

}
