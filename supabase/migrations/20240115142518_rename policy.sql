drop policy "Enable read access for all users" on "public"."moods";

create policy "Enable insert access to authenticated"
on "public"."moods"
as permissive
for insert
to authenticated
with check (true);




