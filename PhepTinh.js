class PhepTinh {
    constructor(pheptinh, soa, sob){
        this.pheptinh = pheptinh;
        this.soa = soa;
        this.sob = sob;
    }

    getResultString() {
        const sign = this.getSign();
        const left = `${this.soa} ${sign} ${this.sob}`;
        const result = eval(left);
        return `${left} = ${result}`;
    }

    getSign() {
        switch(this.pheptinh){
            case 'cong':
                return '+';
            case 'tru':
                return '-';
            case 'nhan':
                return '*'
            default: return '/'
        }
    }
}

module.exports = PhepTinh;
