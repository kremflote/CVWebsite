namespace cv_backend.Interfaces;

interface ITenure
{
    public int Id { get; set; }
    public string Company_Name { get; set; } 
    public string Work_Title { get; set; } 
    public string Start_Date { get; set; } 
    public string End_Date { get; set; } 
}