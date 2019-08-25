package org.ulib.ulibws.repo.projection;

import lombok.Value;
import org.ulib.ulibws.repo.Book;
import org.ulib.ulibws.repo.Library;

import java.util.List;

@Value
public class BookDetailDto {
    String title;
    String author;
    Integer year;
    String description;
    String image;
    List<Library> libraries;

    public BookDetailDto(Book book, List<Library> libraries) {
        this.title = book.getTitle();
        this.author = book.getAuthor();
        this.year = book.getYear();
        this.description = book.getDescription();
        this.image = book.getImage();
        this.libraries = libraries;
    }
}
