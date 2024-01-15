drop policy "Insert for self" on "public"."moods";

alter table "public"."moods" alter column "user_id" set default auth.uid();

alter table "public"."moods" alter column "user_id" set not null;

create policy "Enable read access for all users"
on "public"."moods"
as permissive
for insert
to authenticated
with check (true);




