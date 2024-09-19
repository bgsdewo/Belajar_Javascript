//Bab Function dan method Javascript

//pengenalan function di JS

// function lemparDadu() {
//   console.log(Math.floor(Math.random() * 6) + 1);
// }
// lemparDadu();

//topic Statement Return Pada Function
// function jumlahkan(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return "Bukan angka";
//   }
//   return a + b;
// }

// console.log(jumlahkan(1, 3));

//topic Visibilitas Variabel Sesuai Scope Atau Ruang Lingkup
// let progamming = "JavaScript";
// function typeSafe() {
//   progamming = "TypeScript";
//   console.log(progamming);
// }
// typeSafe();
// console.log(progamming);

//topic Blocked Scope Variabel
//case satu
// let tinggi = 8;
// if (tinggi < 10) {
//   let lebar = 5;
//   console.log(lebar);
// }
// // console.log(lebar);// ini gabisa karena blocked scope

// //case Dua
// for (let index = 0; index < 10; index++) {
//   const indexNumber = index;
//   console.log(indexNumber);
// }
// console.log(indexNumber);//gabisa ini

//kalo make var blocked scope ini berlaku atau bisa dicetak

//topic function lexical scope
// function outerFunction() {
//   let outerVariable = "I'm from the outer function";

//   function innerFunction() {
//     console.log(outerVariable); // Mengakses variabel dari lexical scope (outer function)
//   }
//   innerFunction();
// }
// outerFunction();

//function expresion

//contoh yg lama,karena function mau digunakan berkali"
// function perpangkatan(nilai) {
//   return nilai * nilai;
// }
// let hasil = perpangkatan(5);
// console.log(hasil);

//cara make function expresion
// const hasilPerkalian = function (nilai) {
//   return nilai * nilai;
// };

// console.log(hasilPerkalian(10));

//function Sebagai Argument Function Lain

// function duaKali(func) {
//   func();
//   func();
// }

// function lemparDadu() {
//   const hasil = Math.floor(Math.random() * 6) + 1;
//   console.log(hasil);
// }
// duaKali(lemparDadu);

// topic function bernilai balik function
// function hasilnyaAdalahFunction() {
//   const rand = Math.random(); // Menghasilkan angka acak antara 0 dan 1
//   if (rand > 0.1) {
//     return function () {
//       console.log("Selamat, angkanya lebih besar");
//     };
//   } else {
//     return function () {
//       console.log("Maaf, mungkin bisa coba lagi");
//     };
//   }
// }

// // Memanggil fungsi yang dihasilkan
// const hasil = hasilnyaAdalahFunction();
// hasil(); // Menjalankan fungsi yang dikembalikan

//topic Definisi Sebuah Method
// const myMath = {
//   //ini object
//   perkalian: function (x, y) {
//     //ini method
//     return x * y;
//   },
// };
// //cara mengakses methodnya
// console.log(myMath.perkalian(5, 5));

//topic keyword sakti dari this
const saya = {
  nama: "Bagus",
  hobi: "Bermain Game",
  dataSaya: function () {
    return `Hi,saya ${this.nama}. Hobi saya adalah ${this.hobi}`;
  },
};
console.log(saya.dataSaya());
