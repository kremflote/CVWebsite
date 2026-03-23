using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using cv_backend.Contexts;
using cv_backend.Models;

namespace cv_backend.Controllers;

[ApiController]
[Route("api/[controller]")]

public class ShowcaseController(CVContext _context) : ControllerBase
{
    [HttpGet]
    public async Task<ActionResult<List<Showcase>>> Get()
    {
        try
        {
            List<Showcase> showcases = await _context.Showcases.ToListAsync();
            return Ok(showcases);
        }
        catch (Exception e)
        {
            return StatusCode(500, $"Error: {e.Message}");
        }
    }


    [HttpGet("{id}")]
    public async Task<ActionResult<Showcase>> Get(int id)
    {
        try
        {
            Showcase? showcase = await _context.Showcases.FindAsync(id);
            if (showcase == null)
            {
                return NotFound("No showcase found with that ID.");
            }
            return Ok(showcase);
        }
        catch (Exception e)
        {
            return StatusCode(500, $"Error: {e.Message}");
        }
    }
}