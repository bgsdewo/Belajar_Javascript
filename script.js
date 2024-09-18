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
const password = "Pass123";

let gues = prompt("enter your password");
while (gues !== password) {
  gues = prompt("enter the password");
}
alert("Password Benar");
