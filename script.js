//topic Mengenal Struktur Data Array

//Membuat Array
// let peserta = []; //array kosong

// let pesertaString = ["Bagus", "Sadewo"]; //array String
// let pesertaAngka = [1, 2, 3]; //array angka
// let campuran = ["Bagus", 1, null]; //array canpuran

// topic Mendapatkan Nilai Dengan Index Dan Mengubah Isinya
// let warna = ["hijau", "kuning", "kelab", "bu"];
// console.log(warna);
// //me re asign indeks 2 dalam array
// warna[2] = "kelabu";
// console.log(warna);
// //merubah susunan indeks
// let warnaa = ["hijau", "merah", "biru", "kuning"];
// warnaa[0] = "kuning";
// warnaa[3] = "hijau";
// console.log(warnaa);

//topic Method Array Push Dan Pop

// let barbel = [];
// //menggunakan method push dalam array
// barbel.push(20);
// console.log(barbel);
// barbel.push(40);
// console.log(barbel);
// barbel.push(60, 80, 100);
// console.log(barbel);
// //menggunakan method pop dalam array
// barbel.pop();
// console.log(barbel);

// topic Method Array Unshift Dan Shift

//menggunakan method unshift dalam array
// let student = ["babayo", "cyan"];
// console.log(student);
// student.unshift("Ading");
// console.log(student);

// //menggunakan method shift dalam array
// student.shift();
// console.log(student);

//topic Beberapa Method Array Yang Sering Digunakan

//Method Concate dalam array
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);
console.log(array3);

//Method index of dalam array
const beasts = ["ant", "bison", "camel", "duck", "bison"];
console.log(beasts.indexOf("bison"));
// Expected output: 1
// Start from index 2
console.log(beasts.indexOf("bison", 2));
// Expected output: 4
console.log(beasts.indexOf("giraffe"));
// Expected output: -1

//Method includes dalam array
const arraySatu = [1, 2, 3];
console.log(arraySatu.includes(2));
// Expected output: true
const pets = ["cat", "dog", "bat"];
console.log(pets.includes("cat"));
// Expected output: true
console.log(pets.includes("at"));
// Expected output: false

// //Method Sort dalam array
// const months = ["March", "Jan", "Feb", "Dec"];
// months.sort();
// console.log(months);
// // Expected output: Array ["Dec", "Feb", "Jan", "March"]

// const array1 = [1, 30, 4, 21, 100000];
// array1.sort();
// console.log(array1);
// // Expected output: Array [1, 100000, 21, 30, 4]

// //Method splice dalam array
// const animals = ["ant", "bison", "camel", "duck", "elephant"];
// console.log(animals.slice(2));
// // Expected output: Array ["camel", "duck", "elephant"]
// console.log(animals.slice(2, 4));
// // Expected output: Array ["camel", "duck"]
// console.log(animals.slice(1, 5));
// // Expected output: Array ["bison", "camel", "duck", "elephant"]
// console.log(animals.slice(-2));
// // Expected output: Array ["duck", "elephant"]
// console.log(animals.slice(2, -1));
// // Expected output: Array ["camel", "duck"]
// console.log(animals.slice());
// // Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

// //Method splice dalam array
// const months = ["Jan", "March", "April", "June"];
// months.splice(1, 0, "Feb");
// // Inserts at index 1
// console.log(months);
// // Expected output: Array ["Jan", "Feb", "March", "April", "June"]
// months.splice(4, 1, "May");
// // Replaces 1 element at index 4
// console.log(months);
// // Expected output: Array ["Jan", "Feb", "March", "April", "May"]

//Method reverese dalam array
// const array1 = ['one', 'two', 'three'];
// console.log('array1:', array1);
// // Expected output: "array1:" Array ["one", "two", "three"]
// const reversed = array1.reverse();
// console.log('reversed:', reversed);
// // Expected output: "reversed:" Array ["three", "two", "one"]
// // Careful: reverse is destructive -- it changes the original array.
// console.log('array1:', array1);
// // Expected output: "array1:" Array ["three", "two", "one"]
