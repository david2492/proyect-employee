using System;
using System.Collections.Generic;

namespace ProyectoPAG.Models;

public partial class TblEmployee
{
    public int EmployeeId { get; set; }

    public int Documento { get; set; }

    public string Nombre { get; set; } = null!;

    public string Apellidos { get; set; } = null!;

    public string Telefono { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string Direccion { get; set; } = null!;

    public string Genero { get; set; } = null!;
}
