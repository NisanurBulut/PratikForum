using Microsoft.EntityFrameworkCore.Migrations;

namespace PratikForumAPI.Migrations
{
    public partial class yorum_veritipi_degisti : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Yorum",
                table: "Puan",
                type: "nvarchar(400)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(400)");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Yorum",
                table: "Puan",
                type: "nvarchar(400)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(400)",
                oldNullable: true);
        }
    }
}
