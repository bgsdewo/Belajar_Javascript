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
let progamming = "JavaScript";
function typeSafe() {
  progamming = "TypeScript";
  console.log(progamming);
}
typeSafe();
console.log(progamming);
