package org.ulib.ulibws.repo;

import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;

/**
 *
 */
@Entity
@Table(name = "libraries")
@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Library {

    @GeneratedValue
    @Id
    @Column
    Long libraryId;
    @Column
    String name;
    @Column
    String address;
    @Column
    Double latitude;
    @Column
    Double longitude;
}
