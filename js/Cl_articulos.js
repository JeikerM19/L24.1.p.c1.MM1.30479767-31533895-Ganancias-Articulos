export default class Cl_articulos {
    constructor(cod, c, pV) {
        this.codigo = cod;
        this.costo = c;
        this.precioV = pV;
    }
    get codigo() {
        return this._codigo;
    }
    set codigo(cod) {
        this._codigo = cod;
    }

    get costo() {
        return this._costo;
    }
    set costo(c) {
        this._costo = c;
    }

    get precioV() {
        return this._precioV;
    }
    set precioV(pV) {
        this._precioV = pV;
    }
}