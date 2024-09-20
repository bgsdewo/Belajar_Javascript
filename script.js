//Bab beberapa fitur baru javascript

//topic Mengatur Default Value Pada Function
// function sapa(namaDepan = "Bagus", namaBelakang = "Sadewo") {
//   console.log(
//     `Nama Depan Saya Adalah ${namaDepan}. Dan nama Belakang saya adalah ${namaBelakang}`
//   );
// }
// sapa();

//topic Mengubah Array Atau Object Menjadi Deret Value Argument Function
// Math.max(1, 2, 3, 4, 5); //ini bisa
// //tapi jika ada situasi seperti ini
// const angka = [1, 2, 3, 4, 5];
// //lalu ingin mengambil nilai maks dari variabel angka menggunakan object Math.max tidak bisa
// //harus melakukan ini dlu
// console.log(Math.max(...angka));

//topic Menggabungkan Nilai Array Dengan Array Lagi
// const angka = [1, 2, 3, 4, 5];
// const animals = ["Singa", "Sapi"];
// const campuran = [...angka, ...animals, true];
// console.log(campuran);
