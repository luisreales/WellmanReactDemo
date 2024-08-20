using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WellmanReactCore.Server.Migrations
{
    /// <inheritdoc />
    public partial class ActivitiesUpgrade : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Activities",
                table: "Activities");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "Activities");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Activities",
                newName: "ActivityName");

            migrationBuilder.RenameColumn(
                name: "AfeNumber",
                table: "Activities",
                newName: "WellboreId");

            migrationBuilder.AddColumn<int>(
                name: "ActivityId",
                table: "Activities",
                type: "int",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddColumn<int>(
                name: "WellId",
                table: "Activities",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Activities",
                table: "Activities",
                column: "ActivityId");

            migrationBuilder.CreateIndex(
                name: "IX_Activities_WellboreId",
                table: "Activities",
                column: "WellboreId");

            migrationBuilder.CreateIndex(
                name: "IX_Activities_WellId",
                table: "Activities",
                column: "WellId");

            migrationBuilder.AddForeignKey(
                name: "FK_Activities_WellBores_WellboreId",
                table: "Activities",
                column: "WellboreId",
                principalTable: "WellBores",
                principalColumn: "WellBoreId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Activities_Wells_WellId",
                table: "Activities",
                column: "WellId",
                principalTable: "Wells",
                principalColumn: "WellId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Activities_WellBores_WellboreId",
                table: "Activities");

            migrationBuilder.DropForeignKey(
                name: "FK_Activities_Wells_WellId",
                table: "Activities");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Activities",
                table: "Activities");

            migrationBuilder.DropIndex(
                name: "IX_Activities_WellboreId",
                table: "Activities");

            migrationBuilder.DropIndex(
                name: "IX_Activities_WellId",
                table: "Activities");

            migrationBuilder.DropColumn(
                name: "ActivityId",
                table: "Activities");

            migrationBuilder.DropColumn(
                name: "WellId",
                table: "Activities");

            migrationBuilder.RenameColumn(
                name: "WellboreId",
                table: "Activities",
                newName: "AfeNumber");

            migrationBuilder.RenameColumn(
                name: "ActivityName",
                table: "Activities",
                newName: "Name");

            migrationBuilder.AddColumn<string>(
                name: "Id",
                table: "Activities",
                type: "nvarchar(450)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Activities",
                table: "Activities",
                column: "Id");
        }
    }
}
