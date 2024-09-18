//topic Mendapatkan Data Dari Array Dengan Perulangan

// const animals = ["cat", "dog", "bird"];
// for (let i = 0; i < animals.length; i++) {
//   console.log(i, animals[i]);
// }

//topic Pengenalan Nested Loop

// const pilihan = ["A", "B", "C", "D"];
// for (let i = 1; i <= 10; i++) {
//   console.log(`${i}. Soal nomor ${i}`);
//   for (let j = 0; j < pilihan.length; j++) {
//     console.log(`  ${pilihan[j]}.  Pilihan Jawaban`);
//   }
// }

//topic Mendapatkan Data Dari Nested Array Dengan Nested Loop
// const nestedArrayRow = [
//   ["Abidas", 75000000, "red", "blue"],
//   ["Niiko", 1200000, "black", "white"],
//   ["Jox", 3000000, "blue", "white"],
// ];

// //cara salah
// // for (let i = 0; i < nestedArrayRow.length; i++) {
// //   console.log(i);
// // }
// //cara benar
// for (let i = 0; i < nestedArrayRow.length; i++) {
//   const row = nestedArrayRow[i];
//   //   console.log(row);
//   console.log(`Baris array ke  ${i + 1}`);
//   for (let j = 0; j < row.length; j++) {
//     console.log(row[j]);
//   }
// }

//ganti topic Perulangan Menggunakan Perintah While
// const password = "Pass123";

// let gues = prompt("enter your password");
// while (gues !== password) {
//   gues = prompt("enter the password");
// }
// alert("Password Benar");

//topic Kata Kunci Break Untuk Memberhentikan Perulangan
// let input = prompt("Hei,say something!");

// while (true) {
//   input = prompt(input);
//   if (input === "stop") break;
// }
// alert("ok");

//contoh lainnya
// for (let i = 1; i <= 1000; i++) {
//   console.log(i);
//   if (i === 100) break;
// }

// membuat game tebakkan angka dengan while

// let maximum = parseInt(prompt("Masukkan nilai maksimal!"));

// // Pastikan pengguna memasukkan nilai maksimal yang valid
// while (!maximum) {
//   maximum = parseInt(prompt("Masukkan nilai maksimal!"));
// }

// // Hasilkan angka acak antara 1 dan nilai maksimal
// const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(targetNum); // Untuk debugging

// let guess = parseInt(prompt("Isi tebakan pertama kamu!"));

// // Jalankan loop hingga pengguna menebak dengan benar
// while (guess !== targetNum) {
//   if (guess > targetNum) {
//     guess = parseInt(prompt("Terlalu tinggi! tebak lagi:"));
//   } else {
//     guess = parseInt(prompt("Terlalu rendah! tebak lagi:"));
//   }
// }

// alert("Selamat! Tebakan Anda benar!!");

//Cara Elegan Melakukan Perulangan Pada Array For Of

//pada array biasa
// const animals = ["cat", "bird", "dog"];
// for (let animal of animals) {
//   console.log(animal);
// }

// //pada nested array
// const nestedArrayRow = [
//   ["Abidas", 75000000, "red", "blue"],
//   ["Niiko", 1200000, "black", "white"],
//   ["Jox", 3000000, "blue", "white"],
// ];
// for (let row of nestedArrayRow) {
//   for (let single of row) {
//     console.log(single);
//   }
// }
