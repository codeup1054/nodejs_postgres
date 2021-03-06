create table person (
id SERIAL PRIMARY KEY,
name VARCHAR(256),
surname VARCHAR(256)
);

create table post (
id serial PRIMARY KEY,
title varchar(256),
content varchar(256),
user_id INTEGER,
foreign key (user_id) references person (id)
);

select * from person;
select count(*) from person;


select * from post;
select count(*), user_id from post group by user_id;

