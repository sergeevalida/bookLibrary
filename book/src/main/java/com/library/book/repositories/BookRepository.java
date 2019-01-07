package com.library.book.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.library.book.models.Book;

public interface BookRepository extends JpaRepository<Book, Long> {

}
