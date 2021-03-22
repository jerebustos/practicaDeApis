const db = require('../../database/models');
const Movie = db.Movie;


const moviesController = {

    list : async (req, res) =>{
        let movies = await Movie.findAll();

        return  res.status(200).json( {
            meta: {total: movies.length,status: 200, url: "api/movies"},
            data: movies
            
        })
    },
        
    detail: async (req, res) => {
        let movie = await Movie.findByPk(req.params.id);
        return res.status(200).json({
            data : movie,
            status: 200
        })


    },

    create: async (req, res) => {
      
      let movie = await Movie.create(req.body);
      return res.status(200).json({
          data : movie,
         status: 200})
    },
    destroy: async (req,res) =>{
        let movie = await Movie.destroy({where:{ id : req.params.id}})
        return res.status(200).json({
            data : movie,
            status: 200
        })
    }
}





module.exports = moviesController;