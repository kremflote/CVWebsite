using Microsoft.AspNetCore.Mvc;

namespace cv_backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CvController(IWebHostEnvironment webHostEnvironment) : ControllerBase
{
    [HttpGet] // http://localhost:5110/api/Cv
    public ActionResult GetCv()
    {
        string filePath = Path.Combine(webHostEnvironment.WebRootPath, "images", "cv.pdf");

        if (!System.IO.File.Exists(filePath))
        {
            return NotFound("CV file not found.");
        }

        return PhysicalFile(filePath, "application/pdf");
    }
}