using Microsoft.EntityFrameworkCore.Migrations;

namespace PratikForumAPI.Migrations
{
    public partial class AcountHolder_type_degisim_ : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AccountHolder",
                table: "BankAccounts");

            migrationBuilder.AddColumn<string>(
                name: "UserID",
                table: "BankAccounts",
                type: "nvarchar(100)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserID",
                table: "BankAccounts");

            migrationBuilder.AddColumn<string>(
                name: "AccountHolder",
                table: "BankAccounts",
                type: "nvarchar(100)",
                nullable: false,
                defaultValue: "");
        }
    }
}
