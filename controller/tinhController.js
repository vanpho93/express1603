const PhepTinh = require('../PhepTinh');

module.exports = (req, res) => {
    const { pt, a, b } = req.params;
    const pheptinh = new PhepTinh(pt, a, b);
    try{
        res.send(pheptinh.getResultString());
    } catch (e) {
        res.send(e + '');
    }
};
