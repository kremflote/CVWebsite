using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using cv_backend.Contexts;
using cv_backend.Models;

namespace cv_backend.Controllers;

[ApiController]
[Route("api/[controller]")]

public class SkillController(CVContext _context) : ControllerBase
{
    [HttpGet]
    public async Task<ActionResult<List<Skill>>> Get()
    {
        try
        {
            List<Skill> skills = await _context.Skills.ToListAsync();
            return Ok(skills);
        }
        catch (Exception e)
        {
            return StatusCode(500, $"Error: {e.Message}");
        }
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Skill>> Get(int id)
    {
        try
        {
            Skill? skill = await _context.Skills.FindAsync(id);
            if (skill == null)
            {
                return NotFound("No skill found with that ID.");
            }
            return Ok(skill);
        }
        catch (Exception e)
        {
            return StatusCode(500, $"Error: {e.Message}");
        }
    }
}