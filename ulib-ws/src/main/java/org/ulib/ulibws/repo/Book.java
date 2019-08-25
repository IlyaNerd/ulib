package org.ulib.ulibws.repo;

import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;
import org.hibernate.annotations.Fetch;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 *
 */
@Entity
@Data
@Table(name = "books")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Book {

    @GeneratedValue
    @Id
    @Column
    Long bookId;
    @Column
    String title;
    @Column
    String author;
    @Column
    Integer year;
    @Column
    String description;
    @Column
    String image;

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(
            name = "books_libraries",
            joinColumns = {@JoinColumn(name = "book_id")},
            inverseJoinColumns = {@JoinColumn(name = "library_id")}
    )
    List<Library> libraries = new ArrayList<>();
}
