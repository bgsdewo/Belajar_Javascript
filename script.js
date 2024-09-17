//Javascript Logic dalam pembuat keputusan

//topic operator pembanding

//Lebih dari
// console.log(12 > 11);
// //Kurang dari
// console.log(10 < 11);
// //bernilai tidak sama dengan
// console.log("dan masih banyak lainnya");

//topicPerbedaan Jumlah Sama Dengan Dua Dan Tiga

//contoh dalam double equals atau(==)
// console.log(55 == 55); //true
// console.log("b" == "c"); //false
// console.log("55" == 55); //true tapi ini salah
// console.log(0 == ""); //true
// console.log(true == false); //false
// console.log(0 == false); //false
// console.log(null == undefined); //true

//solusi dari kejanggalan diatas gunakanlah === dan !==

//beberapa jenis console,alert,dan prompt
// console.log("contoh dari consolog");
// console.warn("contoh dari consoleWarn");
// console.error("contoh dari consoleError");
// //contoh dari alert
// alert("contoh dari alert");
// //contoh dari prompt
// console.log(prompt("ini contoh dari prompt"));

//topic nesting if

// const password = prompt("Input Your Password!");
// if (password.length >= 6) {
//   if (password.indexOf(" ") === -1) {
//     console.log("Password valid");
//   } else {
//     console.log("Password tidak boleh ada spasi");
//   }
// } else {
//   password("Password minimal 6 karakter");
// }

//Operator Logic And
// const password = prompt("Input Your Password!");
// if (password.length >= 6 && password.indexOf(" ") === -1) {
//   console.log("PAssword Valid");
// } else {
//   console.log("Password tidak valid");
// }
//logical AND ini bisa mempersingkat Nested IF

////Operator Logic OR
// const role = prompt("Masukin Role Akun Anda").toLowerCase();

// if (role === "admin" || role === "gm") {
//   console.log("Masuk Ke Server");
// } else {
//   console.log("Kamu mau menyusup ke server ya");
// }

//topic Operator Logic Not

// const role = prompt("Masukin Role Akun Anda").toLowerCase();

// if (role !== "admin") {
//   console.log("Kamu mau menyusup ke server ya");
// } else {
//   console.log("Masuk Ke Server");
// }

// topic Switch Sebagai Alternatif If Statement

const day = prompt("Masukkan angka hari (1-7):");

switch (day) {
  case "1":
    console.log("Hari ini adalah Senin");
    break;
  case "2":
    console.log("Hari ini adalah Selasa");
    break;
  case "3":
    console.log("Hari ini adalah Rabu");
    break;
  case "4":
    console.log("Hari ini adalah Kamis");
    break;
  case "5":
    console.log("Hari ini adalah Jumat");
    break;
  case "6":
    console.log("Hari ini adalah Sabtu");
    break;
  case "7":
    console.log("Hari ini adalah Minggu");
    break;
  default:
    console.log("Angka yang dimasukkan tidak valid");
}
