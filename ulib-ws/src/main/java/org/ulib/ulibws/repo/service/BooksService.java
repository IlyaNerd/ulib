package org.ulib.ulibws.repo.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.ulib.ulibws.repo.projection.BookDetailDto;
import org.ulib.ulibws.repo.projection.BookTitleDto;

public interface BooksService {
    Page<BookTitleDto> findBooksTitles(Pageable pageable);

    BookDetailDto findBookById(Long id);

    BookDetailDto findBookByIdWithClosestLibraries(Long id, double latitude, double longitude);

    Page<BookTitleDto> searchBooks(Pageable pageable, String search);
}
