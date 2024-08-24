namespace PeliculaAPI.Models{

public class Pelicula{

    public int Id {get; set;}

    public required string Title {get; set;}

    public required int releaseYear {get; set;}

    public string? Genere {get; set;}

    public string? Description {get; set;}

}
}