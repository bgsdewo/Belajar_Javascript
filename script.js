//topic callback function dan method milik array

//topic For Each Method

//contoh sederhana dari for Each
// const angka = [1, 2, 3, 4, 5, 6];
// function print(element) {
//   console.log(element);
// }
// angka.forEach(print);

//cara ke dua
// angka.forEach(function (el) {
//   if (el % 2 === 0) {
//     console.log(el);
//   }
// });

//cara ketiga
// const animes = [
//   { title: "Attack on Titan", rating: 9.1 },
//   { title: "Fullmetal Alchemist: Brotherhood", rating: 9.2 },
//   { title: "Naruto", rating: 8.3 },
//   { title: "One Piece", rating: 8.8 },
//   { title: "Death Note", rating: 8.9 },
//   { title: "Demon Slayer", rating: 8.7 },
//   { title: "My Hero Academia", rating: 8.4 },
//   { title: "Sword Art Online", rating: 7.6 },
// ];

// animes.forEach(function (anime) {
//   console.log(`${anime.title} - ${anime.rating}/100`);
// });

//topic Maps method
// const angka = [1, 2, 3, 4, 5, 6];
// const angkaDouble = angka.map(function (num) {
//   return num * 2;
// });
// console.log(angkaDouble);

// //contoh lain

// const animes = [
//   { title: "Attack on Titan", rating: 9.1 },
//   { title: "Fullmetal Alchemist: Brotherhood", rating: 9.2 },
//   { title: "Naruto", rating: 8.3 },
//   { title: "One Piece", rating: 8.8 },
//   { title: "Death Note", rating: 8.9 },
//   { title: "Demon Slayer", rating: 8.7 },
//   { title: "My Hero Academia", rating: 8.4 },
//   { title: "Sword Art Online", rating: 7.6 },
// ];

// const animeList = animes.map(function (anime) {
//   return anime.title.toUpperCase();
// });
// console.log(animeList);

//topic Sebelum Lanjut Kenalan Dengan Arrow Function
// const perkalian = (x, y) => {
//   console.log(x * y);
// };
// perkalian(2, 3);

//topic Return Secara Implisit Dari Arrow Function
// const random = () => Math.floor(Math.random() * 1000);
// const add = (a, b) => a + b;
// //intinya kalo mau melakukan seperti ini,ketika kita ingin me return satu baris saja!
// console.log(random());
// console.log(add(1, 2));

//topic Memahami Settimeout Dan Setinterval

// penggunaan dari settimeout
// console.log("Haloo");
// setTimeout(() => {
//   console.log("Masih disana gak??"); //menunggu 5 detik baru muncul
// }, 5000);

// //setinterval
// const interval = setInterval(() => {
//   console.log(Math.random());
// }, 2000);
// //membersihkan setinterval
// clearInterval(interval);

//topic Memiilh Data Tertentu Di Dalam Array Dengan Filter Method
//contoh satu
// const angka = [1, 2, 3, 4, 5, 6];
// const angkataBaru = angka.filter((n) => {
//   return n < 5;
// });
// console.log(angkataBaru);
// //contoh dua
// const animes = [
//   { title: "Attack on Titan", rating: 9.1 },
//   { title: "Fullmetal Alchemist: Brotherhood", rating: 9.2 },
//   { title: "Naruto", rating: 8.3 },
//   { title: "One Piece", rating: 8.8 },
//   { title: "Death Note", rating: 8.9 },
//   { title: "Demon Slayer", rating: 8.7 },
//   { title: "My Hero Academia", rating: 8.4 },
//   { title: "Sword Art Online", rating: 7.6 },
// ];
// const animeBagus = animes.filter((animes) => animes.rating >= 8.5);
// console.log(animeBagus);
// const judulAnimeBagus = animeBagus.map((anime) => anime.title);
// console.log(judulAnimeBagus);
// const animeSedang = animes.filter((animes) => animes.rating <= 8.0);
// console.log(animeSedang);

//topic Menentukan Benar Atau Salah Pada Array Dengan Every Dan Some Method
//menggunakan every
// const examScore = [80, 80, 70, 75];
// const isGraduate = examScore.every((score) => score >= 75);
// console.log(isGraduate);

// //menggunakan some
// const animes = [
//   { title: "Attack on Titan", rating: 9.1 },
//   { title: "Fullmetal Alchemist: Brotherhood", rating: 9.2 },
//   { title: "Naruto", rating: 8.3, year: 2003 },
//   { title: "One Piece", rating: 8.8, year: 2004 },
//   { title: "Death Note", rating: 8.9, year: 2005 },
//   { title: "Demon Slayer", rating: 8.7, year: 2006 },
//   { title: "My Hero Academia", rating: 8.4, year: 2007 },
//   { title: "Sword Art Online", rating: 7.6, year: 2008 },
// ];
// const isAnimeListNew = animes.some((anime) => anime.year > 2007);
// console.log(isAnimeListNew);

//topic Mendapatkan Satu Nilai Sesuai Kondisi Dari Sebuah Array Dengan Reduce
// contoh case 1
// const examScore = [80, 80, 70, 75];
// const total = examScore.reduce((total, score) => {
//   return total + score;
// });
// console.log(total);

// //contoh case 2
// const animes = [
//   { title: "Naruto", rating: 8.3, year: 2003 },
//   { title: "One Piece", rating: 8.8, year: 2004 },
//   { title: "Death Note", rating: 8.9, year: 2005 },
//   { title: "Demon Slayer", rating: 8.7, year: 2006 },
//   { title: "My Hero Academia", rating: 8.4, year: 2007 },
//   { title: "Sword Art Online", rating: 7.6, year: 2008 },
//   { title: "Fullmetal Alchemist: Brotherhood", rating: 9.2 },
//   { title: "Attack on Titan", rating: 9.1 },
// ];
// const lowAnime = animes.reduce((lowAnime, currAnime) => {
//   console.log(lowAnime, currAnime);
//   if (currAnime.rating > lowAnime.rating) {
//     return currAnime;
//   }
//   return lowAnime;
// });
