using Microsoft.EntityFrameworkCore.Migrations;

namespace PratikForumAPI.Migrations
{
    public partial class Yorum_table_eklendi : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Puan");

            migrationBuilder.AddColumn<int>(
                name: "kisiSayisi",
                table: "Banks",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "kisiSayisi",
                table: "Banks");

            migrationBuilder.CreateTable(
                name: "Puan",
                columns: table => new
                {
                    PuanId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BankID = table.Column<int>(type: "int", nullable: false),
                    Yildiz = table.Column<int>(type: "int", nullable: false),
                    Yorum = table.Column<string>(type: "nvarchar(400)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Puan", x => x.PuanId);
                });
        }
    }
}
