INSERT INTO books (book_id, title, author, year, description, image) VALUES (1, 'Анна Каренина', 'Лев Толстой', 1878, 'роман Льва Толстого о трагической любви замужней дамы Анны Карениной и блестящего офицера Вронского на фоне счастливой семейной жизни дворян Константина Лёвина[К 1] и Кити Щербацкой', 'https://cdn.eksmo.ru/v2/430000000000145684/COVER/cover1__w600.jpg');
INSERT INTO books (book_id, title, author, year, description, image) VALUES (2, 'Евгений Онегин', 'Александр Пушкин', 1830, ' роман в стихах русского поэта Александра Сергеевича Пушкина', 'https://cdn.eksmo.ru/v2/430000000000130859/COVER/cover1__w600.jpg');
INSERT INTO books (book_id, title, author, year, description, image) VALUES (3, 'Мастер и Маргарита', 'Михаил Булгаков', 1920, 'The Master and Margarita presents three interlaced lines of action  which are integrated and are mutually enlightening: a visit by Satan to Moscow', 'https://cdn1.ozone.ru/multimedia/1011707407.jpg');

INSERT INTO libraries (library_id, name, address, latitude, longitude) VALUES (1, 'Национальная библиотека', 'проспект Независимости 116', 53.931579, 27.646166);
INSERT INTO libraries (library_id, name, address, latitude, longitude) VALUES (2, 'Библиотека № 14 им. Богушевича', 'улица Притыцкого 42', 53.909063, 27.483924);

INSERT INTO books_libraries (book_id, library_id) VALUES (1, 1);
INSERT INTO books_libraries (book_id, library_id) VALUES (1, 2);
INSERT INTO books_libraries (book_id, library_id) VALUES (2, 1);
INSERT INTO books_libraries (book_id, library_id) VALUES (3, 1);
