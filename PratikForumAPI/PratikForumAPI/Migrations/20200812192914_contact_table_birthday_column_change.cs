using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace PratikForumAPI.Migrations
{
    public partial class contact_table_birthday_column_change : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "HireDate",
                table: "Contact");

            migrationBuilder.AddColumn<DateTime>(
                name: "Birthday",
                table: "Contact",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Birthday",
                table: "Contact");

            migrationBuilder.AddColumn<DateTime>(
                name: "HireDate",
                table: "Contact",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }
    }
}
