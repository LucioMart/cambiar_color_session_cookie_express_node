const colors = require('../data/colores.json')

module.exports = {
    index: (req, res) => {
        return res.render('index', {
            colors
        })
    }
}