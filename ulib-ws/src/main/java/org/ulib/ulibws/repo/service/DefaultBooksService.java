package org.ulib.ulibws.repo.service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.ulib.ulibws.repo.Book;
import org.ulib.ulibws.repo.Library;
import org.ulib.ulibws.repo.projection.BookDetailDto;
import org.ulib.ulibws.repo.projection.BookTitleDto;
import org.ulib.ulibws.repo.repository.BooksRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class DefaultBooksService implements BooksService {

    private final static int R = 6371;

    @Value("${distance-threshold}")
    private double distanceThreshold;

    private final BooksRepository booksRepository;

    @Override
    public Page<BookTitleDto> findBooksTitles(Pageable pageable) {
        return booksRepository.findAllProjectedBy(pageable);
    }

    @Override
    public BookDetailDto findBookById(Long id) {
        Optional<Book> optionalBook = booksRepository.findById(id);
        if (!optionalBook.isPresent()) {
            return null;
        }
        Book book = optionalBook.get();
        return new BookDetailDto(book, book.getLibraries());
    }

    @Override
    public BookDetailDto findBookByIdWithClosestLibraries(Long id, double latitude, double longitude) {
        Optional<Book> optionalBook = booksRepository.findById(id);
        if (!optionalBook.isPresent()) {
            return null;
        }
        Book book = optionalBook.get();
        return new BookDetailDto(book, findClosestLibraries(book.getLibraries(), latitude, longitude));
    }

    private List<Library> findClosestLibraries(List<Library> libraries, double latitude, double longitude) {
        return libraries.stream()
                .filter(lib -> calculateDistance(latitude, lib.getLatitude(), longitude, lib.getLongitude()) < distanceThreshold)
                .collect(Collectors.toList());
    }

    private double calculateDistance(double lat1, double lat2, double lon1, double lon2) {
        double latDistance = Math.toRadians(lat2 - lat1);
        double lonDistance = Math.toRadians(lon2 - lon1);
        double a = Math.sin(latDistance / 2) * Math.sin(latDistance / 2)
                + Math.cos(Math.toRadians(lat1)) * Math.cos(Math.toRadians(lat2))
                * Math.sin(lonDistance / 2) * Math.sin(lonDistance / 2);
        double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        double distance = R * c * 1000; // convert to meters

        distance = Math.pow(distance, 2);

        return Math.sqrt(distance);
    }

    @Override
    public Page<BookTitleDto> searchBooks(Pageable pageable, String search) {
        return booksRepository.findAllProjectedByTitleContainingOrAuthorContaining(pageable, search, search);
    }
}
