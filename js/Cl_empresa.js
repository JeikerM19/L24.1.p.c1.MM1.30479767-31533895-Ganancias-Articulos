export default class Cl_empresa{
    constructor(){
        this.acumCost = 0.0;
        this.acumPrecio = 0.0;
        this.auxMayor = 0.0;
        this.auxCod = 0;
    }
    procesarArticulos(art){
        this.acumCost += art.costo;
        this.acumPrecio += art.precioV;
        if(art.precioV > this.auxMayor){
            this.auxCod = art.codigo;
            this.auxMayor = art.precioV;
        }
    }
    ganaciaT(){
        return this.acumPrecio - this.acumCost;
    }
    mostrarMayorC(){
        return this.auxCod;
    }

}