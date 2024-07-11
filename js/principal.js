import Cl_articulos from "./Cl_articulos.js";
import Cl_empresa from "./Cl_empresa.js";

let art1 = new Cl_articulos(888, 10, 15);
let art2 = new Cl_articulos(777, 20 , 25 );
let art3 = new Cl_articulos(999, 15, 25);
let art4 = new Cl_articulos(333, 25, 35);
let art5 = new Cl_articulos(111, 50, 70);
let art6 = new Cl_articulos(333, 40, 50);
let art7 = new Cl_articulos(444, 80, 100);
let art8 = new Cl_articulos(222, 5, 10);

let emp = new Cl_empresa();
emp.procesarArticulos(art1);
emp.procesarArticulos(art2);
emp.procesarArticulos(art3);
emp.procesarArticulos(art4);
emp.procesarArticulos(art5);
emp.procesarArticulos(art6);
emp.procesarArticulos(art7);
emp.procesarArticulos(art8);

let salida = document.getElementById("Salida");
salida.innerHTML += "Ganancia Total: " + emp.ganaciaT() + "$" + "<br> Código del articulo con mayor precio venta: " + emp.mostrarMayorC();