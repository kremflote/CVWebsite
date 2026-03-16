using Microsoft.EntityFrameworkCore;
using cv_backend.Contexts;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddDbContext<CVContext>(
    options => options.UseSqlite("Data source = Databases/CVData.db")
);

builder.Services.AddCors(
    options =>
    {
        options.AddPolicy("AllowAnyOrigin",
            policies => policies
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader()
                );
    }
);

builder.Services.AddControllers();
builder.Services.AddOpenApi();

var app = builder.Build();

// Gjør index filen accessable
DefaultFilesOptions options = new DefaultFilesOptions();
options.DefaultFileNames.Add("index.html");

app.UseDefaultFiles(options);

app.UseStaticFiles();

app.UseCors("AllowAnyOrigin");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
