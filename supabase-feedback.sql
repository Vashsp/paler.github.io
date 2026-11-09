create table public.visitor_feedback (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(btrim(name)) between 1 and 60),
  rating smallint not null check (rating between 1 and 5),
  comment text not null check (char_length(btrim(comment)) between 1 and 1000),
  submitted_at timestamptz not null default now()
);

create index visitor_feedback_submitted_at_idx
  on public.visitor_feedback (submitted_at desc);

alter table public.visitor_feedback enable row level security;

grant select, insert on public.visitor_feedback to anon;

create policy "Anyone can read visitor feedback"
  on public.visitor_feedback
  for select
  to anon
  using (true);

create policy "Anyone can post visitor feedback"
  on public.visitor_feedback
  for insert
  to anon
  with check (true);

create view public.visitor_feedback_summary as
  select
    count(*)::integer as review_count,
    coalesce(round(avg(rating), 1), 0)::numeric(3, 1) as average_rating
  from public.visitor_feedback;

grant select on public.visitor_feedback_summary to anon;
