package com.library.book.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.library.book.models.Author;

public interface AuthorRepository extends JpaRepository<Author, Long> {

}
