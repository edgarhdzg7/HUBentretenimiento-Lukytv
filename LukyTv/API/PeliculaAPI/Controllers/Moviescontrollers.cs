using Microsoft.AspNetCore.Mvc;
using PeliculaAPI.Models;
using System.Collections.Generic;

namespace PeliculaAPI.Controllers{
    [Route("api/[controller]")]
    [ApiController]
    public class PeliculasController:ControllerBase
    {
        public static List<Pelicula> pelicula = new List<Pelicula> 
        {
            new Pelicula {Id = 1, Title ="Harry Potter" , releaseYear = 2001 , Genere ="Magia", Description = "un chico mago"}
        };

        [HttpGet]
        public ActionResult<IEnumerable<Pelicula>> getPelicula(){
            return Ok(pelicula);
        }
    }
    
}
