package com.library.book.api;

public class BookRequest {
	private Long bookId;
	private String title;
	private String genre;
	private int year;
	private Long[] authorIds;

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
	public Long[] getAuthorIds() {
		return authorIds;
	}
	public void setAuthorIds(Long[] authorIds) {
		this.authorIds = authorIds;
	}
	
}
