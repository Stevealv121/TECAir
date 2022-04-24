using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace TEC_Air_API_Model.Migrations
{
    public partial class InitialDatabase : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AIRPLANE",
                columns: table => new
                {
                    plate = table.Column<string>(type: "text", nullable: false),
                    model = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AIRPLANE", x => x.plate);
                });

            migrationBuilder.CreateTable(
                name: "BAGGAGE",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    color = table.Column<string>(type: "text", nullable: false),
                    weight = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BAGGAGE", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "PROMOTION",
                columns: table => new
                {
                    promotion_code = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    description = table.Column<string>(type: "text", nullable: false),
                    title = table.Column<string>(type: "text", nullable: false),
                    day = table.Column<int>(type: "integer", nullable: false),
                    month = table.Column<int>(type: "integer", nullable: false),
                    year = table.Column<int>(type: "integer", nullable: false),
                    discount = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PROMOTION", x => x.promotion_code);
                });

            migrationBuilder.CreateTable(
                name: "ROLE",
                columns: table => new
                {
                    name = table.Column<string>(type: "text", nullable: false),
                    description = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ROLE", x => x.name);
                });

            migrationBuilder.CreateTable(
                name: "ROUTE",
                columns: table => new
                {
                    route_code = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    origin = table.Column<string>(type: "text", nullable: false),
                    destination = table.Column<string>(type: "text", nullable: false),
                    year = table.Column<int>(type: "integer", nullable: false),
                    month = table.Column<int>(type: "integer", nullable: false),
                    day = table.Column<int>(type: "integer", nullable: false),
                    hours = table.Column<int>(type: "integer", nullable: false),
                    minutes = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ROUTE", x => x.route_code);
                });

            migrationBuilder.CreateTable(
                name: "USER",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    email = table.Column<string>(type: "text", nullable: false),
                    first_name = table.Column<string>(type: "text", nullable: false),
                    second_name = table.Column<string>(type: "text", nullable: true),
                    first_surname = table.Column<string>(type: "text", nullable: false),
                    second_surname = table.Column<string>(type: "text", nullable: true),
                    phone = table.Column<int>(type: "integer", nullable: false),
                    university = table.Column<string>(type: "text", nullable: true),
                    student_id = table.Column<int>(type: "integer", nullable: true),
                    role_name = table.Column<string>(type: "text", nullable: false),
                    password = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_USER", x => x.id);
                    table.ForeignKey(
                        name: "FK_USER_ROLE_role_name",
                        column: x => x.role_name,
                        principalTable: "ROLE",
                        principalColumn: "name",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "FLIGHT",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    boarding_gate = table.Column<int>(type: "integer", nullable: false),
                    price = table.Column<int>(type: "integer", nullable: false),
                    status = table.Column<bool>(type: "boolean", nullable: false),
                    route_code = table.Column<int>(type: "integer", nullable: false),
                    airplane_plate = table.Column<string>(type: "text", nullable: false),
                    duration = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FLIGHT", x => x.id);
                    table.ForeignKey(
                        name: "FK_FLIGHT_AIRPLANE_airplane_plate",
                        column: x => x.airplane_plate,
                        principalTable: "AIRPLANE",
                        principalColumn: "plate",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_FLIGHT_ROUTE_route_code",
                        column: x => x.route_code,
                        principalTable: "ROUTE",
                        principalColumn: "route_code",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "SEAT",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    description = table.Column<string>(type: "text", nullable: false),
                    state = table.Column<bool>(type: "boolean", nullable: false),
                    user_id = table.Column<int>(type: "integer", nullable: false),
                    airplane_plate = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SEAT", x => x.id);
                    table.ForeignKey(
                        name: "FK_SEAT_AIRPLANE_airplane_plate",
                        column: x => x.airplane_plate,
                        principalTable: "AIRPLANE",
                        principalColumn: "plate",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_SEAT_USER_user_id",
                        column: x => x.user_id,
                        principalTable: "USER",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AppliesTo",
                columns: table => new
                {
                    promotion_code = table.Column<int>(type: "integer", nullable: false),
                    flight_id = table.Column<int>(type: "integer", nullable: false),
                    final_price = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.ForeignKey(
                        name: "FK_AppliesTo_FLIGHT_flight_id",
                        column: x => x.flight_id,
                        principalTable: "FLIGHT",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AppliesTo_PROMOTION_promotion_code",
                        column: x => x.promotion_code,
                        principalTable: "PROMOTION",
                        principalColumn: "promotion_code",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Books",
                columns: table => new
                {
                    user_id = table.Column<int>(type: "integer", nullable: false),
                    flight_id = table.Column<int>(type: "integer", nullable: false),
                    flightid = table.Column<int>(type: "integer", nullable: true),
                    userid = table.Column<int>(type: "integer", nullable: true)
                },
                constraints: table =>
                {
                    table.ForeignKey(
                        name: "FK_Books_FLIGHT_flightid",
                        column: x => x.flightid,
                        principalTable: "FLIGHT",
                        principalColumn: "id");
                    table.ForeignKey(
                        name: "FK_Books_USER_userid",
                        column: x => x.userid,
                        principalTable: "USER",
                        principalColumn: "id");
                });

            migrationBuilder.CreateTable(
                name: "Flight_Stopover",
                columns: table => new
                {
                    flight_id = table.Column<int>(type: "integer", nullable: false),
                    stopover = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.ForeignKey(
                        name: "FK_Flight_Stopover_FLIGHT_flight_id",
                        column: x => x.flight_id,
                        principalTable: "FLIGHT",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Has",
                columns: table => new
                {
                    baggage_id = table.Column<int>(type: "integer", nullable: false),
                    user_id = table.Column<int>(type: "integer", nullable: false),
                    price = table.Column<int>(type: "integer", nullable: false),
                    flight_id = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.ForeignKey(
                        name: "FK_Has_BAGGAGE_baggage_id",
                        column: x => x.baggage_id,
                        principalTable: "BAGGAGE",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Has_FLIGHT_flight_id",
                        column: x => x.flight_id,
                        principalTable: "FLIGHT",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Has_USER_user_id",
                        column: x => x.user_id,
                        principalTable: "USER",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AppliesTo_flight_id",
                table: "AppliesTo",
                column: "flight_id");

            migrationBuilder.CreateIndex(
                name: "IX_AppliesTo_promotion_code",
                table: "AppliesTo",
                column: "promotion_code");

            migrationBuilder.CreateIndex(
                name: "IX_Books_flightid",
                table: "Books",
                column: "flightid");

            migrationBuilder.CreateIndex(
                name: "IX_Books_userid",
                table: "Books",
                column: "userid");

            migrationBuilder.CreateIndex(
                name: "IX_FLIGHT_airplane_plate",
                table: "FLIGHT",
                column: "airplane_plate");

            migrationBuilder.CreateIndex(
                name: "IX_FLIGHT_route_code",
                table: "FLIGHT",
                column: "route_code");

            migrationBuilder.CreateIndex(
                name: "IX_Flight_Stopover_flight_id",
                table: "Flight_Stopover",
                column: "flight_id");

            migrationBuilder.CreateIndex(
                name: "IX_Has_baggage_id",
                table: "Has",
                column: "baggage_id");

            migrationBuilder.CreateIndex(
                name: "IX_Has_flight_id",
                table: "Has",
                column: "flight_id");

            migrationBuilder.CreateIndex(
                name: "IX_Has_user_id",
                table: "Has",
                column: "user_id");

            migrationBuilder.CreateIndex(
                name: "IX_SEAT_airplane_plate",
                table: "SEAT",
                column: "airplane_plate");

            migrationBuilder.CreateIndex(
                name: "IX_SEAT_user_id",
                table: "SEAT",
                column: "user_id");

            migrationBuilder.CreateIndex(
                name: "IX_USER_role_name",
                table: "USER",
                column: "role_name");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AppliesTo");

            migrationBuilder.DropTable(
                name: "Books");

            migrationBuilder.DropTable(
                name: "Flight_Stopover");

            migrationBuilder.DropTable(
                name: "Has");

            migrationBuilder.DropTable(
                name: "SEAT");

            migrationBuilder.DropTable(
                name: "PROMOTION");

            migrationBuilder.DropTable(
                name: "BAGGAGE");

            migrationBuilder.DropTable(
                name: "FLIGHT");

            migrationBuilder.DropTable(
                name: "USER");

            migrationBuilder.DropTable(
                name: "AIRPLANE");

            migrationBuilder.DropTable(
                name: "ROUTE");

            migrationBuilder.DropTable(
                name: "ROLE");
        }
    }
}
