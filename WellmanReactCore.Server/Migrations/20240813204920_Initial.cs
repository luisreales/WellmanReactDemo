using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WellmanReactCore.Server.Migrations
{
    /// <inheritdoc />
    public partial class Initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Wells",
                columns: table => new
                {
                    WellId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    WellName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Status = table.Column<int>(type: "int", nullable: false),
                    WellLicenceNumber = table.Column<int>(type: "int", nullable: false),
                    GeographicArea = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Ground = table.Column<int>(type: "int", nullable: false),
                    CutOrFill = table.Column<int>(type: "int", nullable: false),
                    KBToGround = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Wells", x => x.WellId);
                });

            migrationBuilder.CreateTable(
                name: "WellBores",
                columns: table => new
                {
                    WellBoreId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    WellName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    WellId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WellBores", x => x.WellBoreId);
                    table.ForeignKey(
                        name: "FK_WellBores_Wells_WellId",
                        column: x => x.WellId,
                        principalTable: "Wells",
                        principalColumn: "WellId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_WellBores_WellId",
                table: "WellBores",
                column: "WellId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "WellBores");

            migrationBuilder.DropTable(
                name: "Wells");
        }
    }
}
