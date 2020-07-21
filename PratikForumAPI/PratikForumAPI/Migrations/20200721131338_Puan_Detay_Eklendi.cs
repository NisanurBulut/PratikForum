using Microsoft.EntityFrameworkCore.Migrations;

namespace PratikForumAPI.Migrations
{
    public partial class Puan_Detay_Eklendi : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Puan",
                columns: table => new
                {
                    PuanId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BankID = table.Column<int>(nullable: false),
                    BankPuan = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Puan", x => x.PuanId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Puan");
        }
    }
}
