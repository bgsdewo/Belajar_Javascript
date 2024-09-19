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
const add = (a, b) => a + b;
//intinya kalo mau melakukan seperti ini,ketika kita ingin me return satu baris saja!
console.log(random());
console.log(add(1, 2));
