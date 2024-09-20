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

//topic Menggabungkan Property Object Dengan Object Lainnya
// const user = {
//   firstName: "Bagus",
//   lastName: "Sadewo",
// };
// const passUser = {
//   idUser: "bgsdewo",
//   passUser: "123",
// };
// //gabungkan object user dan pass user
// const dataLengkap = { ...user, ...passUser };
// console.log(dataLengkap);

//topic Malas Bikin Parameter Banyak Bisa Pakai Rest Param
//case satu
// const sumAll = (...nums) => {
//   return nums.reduce((total, el) => total + el);
// };
// console.log(sumAll(1, 2, 3, 4, 5));
// //case dua
// const persons = ["Bagus", "Alya", "Misha", "Jenifer", "Dera"];

// const pemenang = (gold, silver, bronze, ...otherPersons) => {
//   console.log(`Juara satu ${gold}`);
//   console.log(`Juara dua ${silver}`);
//   console.log(`Juara tiga ${bronze}`);
//   console.log(`Peserta lainnya ${otherPersons}`);
// };
// pemenang(...persons);

//topic Bongkar Element Array Ke Masing-Masing Variabel Dengan Mudah-
// const persons = ["Bagus", "Alya", "Misha", "Jenifer", "Dera"];
// const [gold, silver, bronze, ...otherPersons] = persons;
// console.log(gold);
// console.log(silver);
// console.log(bronze);
// console.log(otherPersons);

//topic Bongkar Juga Properti Object Ke Masing-Masing Variabel
// const user = {
//   firstName: "Bagus",
//   lastName: "Sadewo",
// };

// const {
//   firstName: namaDepan,
//   lastName: namaBelakang,
//   phone = "08985312285",
// } = user;
// console.log(namaDepan);
// console.log(namaBelakang);
// console.log(phone);

//Bongkar Properti Object Bisa Dilakukan Di Dalam Function
// //case satu
// const user = {
//   firstName: "Bagus",
//   lastName: "Sadewo",
//   role: "admin",
// };
// const userAndRole = ({ firstName, role }) => {
//   return `${firstName} ${role}`;
// };
// console.log(userAndRole(user));

// //case dua
// const animeList = [
//   { title: "Naruto", rating: 8.5 },
//   { title: "One Piece", rating: 9.0 },
//   { title: "Attack on Titan", rating: 9.5 },
//   { title: "My Hero Academia", rating: 8.0 },
//   { title: "Demon Slayer", rating: 8.7 },
// ];

// const anime = animeList.map(({ title, rating }) => {
//   return `${title} ${rating}`;
// });

// console.log(anime);
