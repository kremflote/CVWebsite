using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using cv_backend.Contexts;
using cv_backend.Models;

namespace cv_backend.Controllers;

[ApiController]
[Route("api/[controller]")]

public class TenureController (CVContext _context) : ControllerBase
{
    [HttpGet]
    public async Task<ActionResult<List<Tenure>>> Get()
    {
        try
        {
            List<Tenure> tenures = await _context.Tenures.ToListAsync();
            return Ok(tenures);
        }
        catch (Exception e)
        {
            return StatusCode(500, $"Error: {e.Message}");
        }
    }

    [HttpGet("{id}")] 
    public async Task<ActionResult<Tenure>> Get(int id)
    {
        try
        {
            Tenure? tenure = await _context.Tenures.FindAsync(id);
            if (tenure == null)
            {
                return NotFound("No tenure found with that ID.");
            }
            return Ok(tenure); 
        }
        catch (Exception e)
        {
            return StatusCode(500, $"Error: {e.Message}");
        }
    }
}