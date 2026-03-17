using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace sportsworld_backend.Migrations
{
    /// <inheritdoc />
    public partial class AddedCategoryToSkills : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Category",
                table: "Skills",
                type: "TEXT",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Category",
                table: "Skills");
        }
    }
}
