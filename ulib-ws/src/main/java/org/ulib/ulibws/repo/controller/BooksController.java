package org.ulib.ulibws.repo.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.ulib.ulibws.repo.projection.BookDetailDto;
import org.ulib.ulibws.repo.projection.BookTitleDto;
import org.ulib.ulibws.repo.service.BooksService;

/**
 *
 */
@RequiredArgsConstructor
@RestController
@RequestMapping("books")
public class BooksController {

    @Autowired
    private final BooksService booksService;

    @GetMapping
    public Page<BookTitleDto> getBookTitles(Pageable pageable) {
        return booksService.findBooksTitles(pageable);
    }

    @GetMapping(path = "search")
    public Page<BookTitleDto> searchBooks(Pageable pageable, @RequestParam String text) {
        return booksService.searchBooks(pageable, text);
    }

    @GetMapping(path = "detail")
    public BookDetailDto getBookById(@RequestParam long id,
                                     @RequestParam(required = false) Double lat, @RequestParam(required = false) Double lon) {
        if (lat == null || lon == null) {
            return booksService.findBookById(id);
        }

        return booksService.findBookByIdWithClosestLibraries(id, lat, lon);
    }
}
