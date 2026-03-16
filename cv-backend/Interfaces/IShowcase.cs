namespace cv_backend.Interfaces;

interface IShowcase
{
    public int Id { get; set; }
    public string Title { get; set; } 
    public string Description { get; set; } 
    public string Image { get; set; } 
    public string Image_Thumbnail { get; set; } 
    public string GitHub_Link { get; set; } 
}