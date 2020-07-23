﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using PratikForumAPI.Models;

namespace PratikForumAPI.Migrations
{
    [DbContext(typeof(PratikForumAPIDBContext))]
    [Migration("20200722144317_bankPuanSilindi")]
    partial class bankPuanSilindi
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.6")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("PratikForumAPI.Models.Bank", b =>
                {
                    b.Property<int>("BankID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Aciklama")
                        .HasColumnType("nvarchar(400)");

                    b.Property<string>("BankName")
                        .HasColumnType("nvarchar(100)");

                    b.Property<double>("Puan")
                        .HasColumnType("float");

                    b.HasKey("BankID");

                    b.ToTable("Banks");
                });

            modelBuilder.Entity("PratikForumAPI.Models.BankAccount", b =>
                {
                    b.Property<int>("BankAccountID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("AccountNumber")
                        .IsRequired()
                        .HasColumnType("nvarchar(20)");

                    b.Property<int>("BankID")
                        .HasColumnType("int");

                    b.Property<string>("IFSC")
                        .IsRequired()
                        .HasColumnType("nvarchar(20)");

                    b.Property<string>("UserID")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("BankAccountID");

                    b.ToTable("BankAccounts");
                });

            modelBuilder.Entity("PratikForumAPI.Models.Puan", b =>
                {
                    b.Property<int>("PuanId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("BankID")
                        .HasColumnType("int");

                    b.Property<int>("Yildiz")
                        .HasColumnType("int");

                    b.Property<string>("Yorum")
                        .HasColumnType("nvarchar(400)");

                    b.HasKey("PuanId");

                    b.ToTable("Puan");
                });

            modelBuilder.Entity("PratikForumAPI.Models.User", b =>
                {
                    b.Property<int>("UserID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(175)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(75)");

                    b.Property<string>("Password")
                        .HasColumnType("nvarchar(6)");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("nvarchar(10)");

                    b.Property<string>("Surname")
                        .HasColumnType("nvarchar(75)");

                    b.HasKey("UserID");

                    b.ToTable("User");
                });
#pragma warning restore 612, 618
        }
    }
}