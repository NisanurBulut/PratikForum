using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace PratikForumAPI.Migrations
{
    public partial class contact_table_eklendi_ : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Contact",
                columns: table => new
                {
                    ContactId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FullName = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    Mobile = table.Column<string>(nullable: true),
                    City = table.Column<string>(nullable: true),
                    Department = table.Column<int>(nullable: false),
                    Gender = table.Column<int>(nullable: false),
                    IsPermanent = table.Column<bool>(nullable: false),
                    HireDate = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Contact", x => x.ContactId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Contact");
        }
    }
}
