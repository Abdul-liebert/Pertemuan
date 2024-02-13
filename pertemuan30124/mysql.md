 Pertemuan 1

## Cara membuat database baru

Buka terminal, lalu ketikkan 'mysql -u root -p' dan passwordnya kosong (langsung enter)

default mysql adalah username: root dan passwordnya: (kosong)

### Cara membuat database baru

Berikan kode yang ada di module dengan cara 'create database smk_personal;'

### Membuat table baru di smk_personal

Buat tabel baru dengan nama biodata dan kolomnya:
 -id, nama, kelas, jurusan, umur;

 create table biodata (
->id int primary key not null,
->nama varchar(255),
->kelas varchar(20),
->jurusan varchar(255),
->umur int
->);

### Lihat data table biodata

Dapat menggunakan query desc biodata;
Dapat juga menggunakan select * from biodata;

### Membuiat data baru pada tabel biodata

Disini akan menambahkan data baru dengan query berikut:
insert into biodata (id, nama, kelas, jurusan, umur) values (1, "Attar", "XI", "SIJA", 16);

Lihat data

* = untuk melihat seluruh data

### mencari data berdasarkan id

Menggunakan query:
select * from biodata where id = ?(1)

### Update data berdasarkan id

Query:

update biodata set nama = "..." where id = ...;

### Hapus berdasarka id

Query:

delete from biodata where id = ...;


### order by
```sql
- Descending => dimulai dari tulisan z - a / id / created_at
- Ascending => dimulai dari tulisan a - z / id / created_at

--mengambil jurusan dari z-a
select * from sekolahan order by jurusan desc;
--mengambil jurusan dari a-z
select * from sekolahan order by jurusan asc;
```
### limit
``` sql
-- membatasi jumlah data
select * from sekolahan limit 5; 

select & from table order by condition limit 5;

select * from tabel
where condition
limit limitation;

select * from sekolahan where jurusan = "RPL" order by id DESC LIMIT 5;
```

### LIKE
```sql
select * from tabel
where field like 'custom%'

select * from table  where name LIKE 'A%';
select * from table  where name LIKE '%A';
select * from table  where name LIKE '%A%';
```

### aliases
```sql
select fields AS asField,
from table;

nama_sekolah = namaSekolah, kapasitas_siswa = kapasitas, alamat = tempat

select nama_sekolah as namaSekolah from sekolahan;

camelCase = snake_case

 ```

 ### in
 ```sql
 select column_name(s)
 from table_name
 where column_name IN (select statement)

 select * from tabel
 where condition in (s)

 
 ```