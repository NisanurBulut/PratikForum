using Microsoft.EntityFrameworkCore.Migrations;

namespace PratikForumAPI.Migrations
{
    public partial class degisken_isim_degistş : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "kisiSayisi",
                table: "Banks");

            migrationBuilder.AddColumn<int>(
                name: "PuanlamaSayisi",
                table: "Banks",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PuanlamaSayisi",
                table: "Banks");

            migrationBuilder.AddColumn<int>(
                name: "kisiSayisi",
                table: "Banks",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
