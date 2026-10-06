create table tasks (
  id serial primary key,
  title varchar(255) not null,
  description text,
  status varchar(20) not null default 'new',
  created_at timestamp not null default now()
);
