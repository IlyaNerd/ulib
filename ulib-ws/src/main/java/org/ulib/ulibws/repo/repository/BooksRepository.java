package org.ulib.ulibws.repo.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.ulib.ulibws.repo.Book;
import org.ulib.ulibws.repo.projection.BookTitleDto;

/**
 *
 */
@Repository
public interface BooksRepository extends JpaRepository<Book, Long> {

    Page<BookTitleDto> findAllProjectedBy(Pageable pageable);

    Page<BookTitleDto> findAllProjectedByTitleContainingOrAuthorContaining(Pageable pageable, String title, String author);
}
