using System.ComponentModel.DataAnnotations;
using cv_backend.Interfaces;

namespace cv_backend.Models;

public class Showcase : IShowcase
{
    [Key]
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string Image { get; set; } = string.Empty;

    public string Image_Thumbnail { get; set; } = string.Empty;
    public string GitHub_Link { get; set; } = string.Empty;
}