create table libraries
(
  library_id serial primary key,
  name       text,
  address    text,
  latitude   numeric,
  longitude  numeric
);
