using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProyectoPAG.Models;

namespace ProyectoPAG.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly DbpruebasContext _dbcontext;

        public EmployeeController(DbpruebasContext context)
        {
            _dbcontext = context;
        }

        [HttpGet]
        [Route("Lista")]
        public async Task<IActionResult> Lista()
        {
            List<TblEmployee> lista = await _dbcontext.TblEmployees.OrderByDescending(c => c.EmployeeId).ToListAsync();
            return StatusCode(StatusCodes.Status200OK, lista);
        }

        [HttpPost]
        [Route("Guardar")]
        public async Task<IActionResult> Guardar([FromBody] TblEmployee request)
        {
            await _dbcontext.TblEmployees.AddAsync(request);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "OK");
        }

        [HttpPut]
        [Route("Editar")]
        public async Task<IActionResult> Editar([FromBody] TblEmployee request)
        {
            _dbcontext.TblEmployees.Update(request);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "OK");
        }

        [HttpDelete]
        [Route("Eliminar/{id:int}")]
        public async Task<IActionResult>Eliminar(int id)
        {
            TblEmployee tblemployee = _dbcontext.TblEmployees.Find(id);
            
            _dbcontext.TblEmployees.Remove(tblemployee);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "OK");
        }

        [HttpGet("Buscar")]
        public IActionResult Buscar(string nombre)
        {
            var resultados = _dbcontext.TblEmployees.Where(e => e.Nombre.Contains(nombre)).ToList();
            return Ok(resultados);
        }



    }
}
