using Microsoft.EntityFrameworkCore.Migrations;

namespace PratikForumAPI.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "BankAccounts",
                columns: table => new
                {
                    BankAccountID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BankID = table.Column<int>(nullable: false),
                    AccountNumber = table.Column<string>(type: "nvarchar(20)", nullable: false),
                    UserID = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    IFSC = table.Column<string>(type: "nvarchar(20)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BankAccounts", x => x.BankAccountID);
                });

            migrationBuilder.CreateTable(
                name: "Banks",
                columns: table => new
                {
                    BankID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BankName = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    Aciklama = table.Column<string>(type: "nvarchar(400)", nullable: true),
                    Puan = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Banks", x => x.BankID);
                });

            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    UserID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(75)", nullable: true),
                    Surname = table.Column<string>(type: "nvarchar(75)", nullable: true),
                    Password = table.Column<string>(type: "nvarchar(6)", nullable: true),
                    PasswordHash = table.Column<string>(nullable: true),
                    Email = table.Column<string>(type: "nvarchar(175)", nullable: true),
                    PhoneNumber = table.Column<string>(type: "nvarchar(10)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.UserID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BankAccounts");

            migrationBuilder.DropTable(
                name: "Banks");

            migrationBuilder.DropTable(
                name: "User");
        }
    }
}
