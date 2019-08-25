package org.ulib.ulibws.repo.projection;

import lombok.Value;

/**
 *
 */
@Value
public class BookTitleDto {
    Long bookId;
    String title;
    String author;
    String image;
}
