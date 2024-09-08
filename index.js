const luasSegitiga = require("./luasSegitiga");
const luasPersegi = require("./luasPersegi");
const luasLingkaran = require("./luasLingkaran");

let tinggi = 10;
let alas = 5;

let sisi = 3;
let jari = 7;

console.log(luasSegitiga.hitungLuas(tinggi, alas));
console.log(luasPersegi.hitungLuas(sisi));
console.log(luasPersegi.hitungKeliling(sisi));
console.log(luasLingkaran.hitungLuas(jari));
