const db = require('../../database/models');
const sequelize = db.sequelize;
const Genre = db.Genre 


const genresController = {
    list: async (req, res) => {
   
    let genres = await Genre.findAll();
    
    return  res.status(200).json( {
                    meta: {total: genres.length,status: 200, url: "api/genres"},
                    data: genres
                    
                })
            },
    
    'detail': (req, res) => {
        Genre.findByPk(req.params.id)
            .then(genre => {
                res.status(200).json( {
                    meta: {status: 200, url: "api/genres/detail/" + req.params.id},
                    data: genre
                    
                });
            })
    }

}

module.exports = genresController;