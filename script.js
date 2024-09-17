//topik pengenalan data string//

// const namaDepan ='Bagus'//penggunaan yg benar
// const namaBelakang ="Sadewo"//ini juga benar
// const ngaco = "Ini salah'//ini error!

//beberapa kasus dalam penggunaan string
// let caseSatu = 'saya mengucapkan "Selamat"'; //ini bisa
// let caseDua = "I Can't Sleep"; //ini bisa juga
// console.log(caseSatu, caseDua);

//topik Penjelasan Index Pada String Dan Panjang Karakter

// let nama = "Bagus";
// //cara mencari tau indeks ke 0 dalam variabel nama itu apa?
// console.log(nama[0]);
// //cara mencari tau panjang atau ada berapa karakter dalam variabel nama
// console.log(nama.length);
// //cara asign baru dari variabel nama
// nama = nama + " Sadewo";
// //spasi dihitung karakter
// console.log(nama.length);

//Method-Method Javascript Yang Memudahkan Hidup Kita
// let greeting = " hello world";
// //penggunaan methodnya
// console.log(greeting.toUpperCase());
// //bisa juga tanpa harus dari dalam variabel
// console.log("BAGUS".toLowerCase());
// //method dalam string bisa digunakan tidak hanya sekali
// console.log(greeting.trim().toUpperCase());

//topik Method Dan Argument (Parameter)

// let greeting = "Hello World";
// console.log(greeting.indexOf("World"));
// console.log(greeting.slice(0, 5));
// console.log(greeting.replace("World", "Dunia"));

//topik Mengenal Null Dan Undefined
let wadah;
console.log(typeof wadah); //ini undefined
wadah = null; //ini null bukan berati kosong atau undefined
console.log(typeof wadah);
