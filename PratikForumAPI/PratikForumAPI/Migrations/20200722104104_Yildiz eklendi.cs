using Microsoft.EntityFrameworkCore.Migrations;

namespace PratikForumAPI.Migrations
{
    public partial class Yildizeklendi : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Yildiz",
                table: "Puan",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Yildiz",
                table: "Puan");
        }
    }
}
