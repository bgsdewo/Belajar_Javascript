//Javascript Struktur data object

//topic Apa itu Object
//cuman lampiran gambar saja

//topic Cara Membuat Struktur Data Object
// const dataSaya = {
//   namaDepan: "Bagus",
//   namaBelakang: "Sadewo",
//   anakKe: "Dua",
// };
// console.log(dataSaya);
// //contoh lainnya dari object
// const sepatuAbidas = {
//   harga: 75000000,
//   isReady: true,
//   color: ["red", "blue", "yellow", "green"],
//   locationStock: {
//     indonesia: 43,
//     malaysia: 53,
//     singapore: 63,
//   },
// };
// console.log(sepatuAbidas);

//Topic Cara Memanggil Data Dari Object

// const sepatuAbidas = {
//   harga: 75000000,
//   isReady: true,
//   color: ["red", "blue", "yellow", "green"],
//   locationStock: {
//     indonesia: 43,
//     malaysia: 53,
//     singapore: 63,
//   },
// };

// //cara tidak disarankan
// console.log(sepatuAbidas["harga"]);
// //cara disarankan
// console.log(sepatuAbidas.harga);
// //ada beberapa case yang bisa mengambil isi object sprti ini
// console.log(sepatuAbidas["is" + "Ready"]);
// //cara mengakses jika ada object didalam object
// console.log(sepatuAbidas.locationStock.indonesia);
// //cara mengakses array didalam object
// console.log(sepatuAbidas.color[0]);

//topic cara membuat object berjalan
// const dataSaya = {
//   namaDepan: "Bagus",
//   namaBelakang: "Sadewo",
//   anakKe: "Dua",
// };
// //merubah isi value dari object dataSaya
// dataSaya.namaBelakang = "Sagas";
// console.log(dataSaya.namaBelakang);
// //menambahakan key dan value baru ke object dataSaya
// dataSaya.alamat = "Jln Batu Sari 01";
// console.log(dataSaya);
// //cara menambahkan array ke object yg sudah dibuat
// dataSaya.favoriteColor = ["red", "blue"];
// console.log(dataSaya);

//topic memanggil object didalam array
//ini merupakan array + object
// const sepatu = [
//   { merk: "Abidas", harga: 75000000 },
//   { merk: "Niiko", harga: 1200000 },
//   { merk: "Jox", harga: 3000000 },
// ];
// //cara mengaksesnya
// console.log(sepatu[0].merk);
