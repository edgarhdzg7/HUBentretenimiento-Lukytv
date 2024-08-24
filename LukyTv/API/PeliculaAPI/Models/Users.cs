namespace PeliculaAPI.Models{

public class Users{

    public int Id {get; set;}

    public required string UserName {get; set;}

    public required string Email {get; set;}

    public List<Pelicula>? PeliculasFavoritas {get; set;}

    public List<Pelicula>? PeliculasVistas {get; set;}

}
}