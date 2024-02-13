<!-- Hi guys, sekarang saya akan menjelaskan terkait foreign key dan macam-macam join di mysql -->
<!-- pertama-tama kita buat dulu database baru -->
<!-- jika sudah kita lanjut untuk pilih database yang sudah dibuat dengan command 'use' -->
<!-- jika berhasil maka output yang dihasilkan adalah 'Database changed', lalu kita lanjut untuk membuat table databasenya -->
<!-- harap simak dengan baik agar tidak ada kesalahan -->
<!-- di table ini saya menggunakan foreign key yang dimana foreign key akan berfungsi untuk menghubungkan element author_id di table buku akan diisi dengan value di table AUTHOR begitu juga dengan rak_id -->

<!-- sekarang kita buat data untuk dimasukan ke table -->
<!-- tablenya sudah berhasil dibuat sekarang kita coba buat menampilkan hasilnya dengan select -->
<!-- Disini value di bagian author_id dan rak_id masih berisikan angka sekarang saya akan hubungkan mereka dengan value yang ada di table author berdasarkan idnya -->
 <!-- maaf teman-teman nampaknya saya ada sedikit typo di bagian joinnya -->
 <!-- berikut command aslinya -->

<!-- Nah, jadi disini table buku yang sebelumnya value dari nama author adalah angka sekarang sudah berubah menjadi value yang ada di table author sesuai dengan idnya. Hal itu adalah hasil kerja dari command join yang dmn dia akan berfungsi menggabungkan baris dari beberapa tabel berdasarkan kondisi tertentu dan jika isinya kosong maka akan memberi nilai null -->
<!-- sekarang kita akan coba RIGHT JOIN -->

<!-- Nah, di bagian right join dia akan menggabungkan 2 tabel atau lebih lalu akan menampilkan tabel dibagian kanan dan dibagian kiri akan mencocokan pada tabel bagian kanan. Di bagian ini tabel bagian kanan akan seluruhnya ditampilkan dan jika pada tabel kiri ada yang tidak cocok dengan tabel kanan maka nilainya adalah null -->
LEFT JOIN adalah kebalikan dari RIGHT JOIN yang dimana data yang ada di tabel bagian kiri akan menampilkan semua datanya dan data di tabel bagian kanan akan menyesuaikan dengan data di tabel bagian kiri dan jika nilainya tidak cocok maka akan diisi dengan NULL

--Penutup

Mungkin sekian video penjelasan FOREIGN KEY, dan macam-macam JOIN. Saya Muhammad Abdullah Al-Aziz mohon maaf jika ada kesalahan;

See you to the next video!!!!