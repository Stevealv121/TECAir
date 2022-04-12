using Dapper;
using Npgsql;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TEC_Air_API_Model;

namespace TECAir_API_Data.Repositories
{
    public class FlightRepository : IFlightRepository
    {
        private PostgreSQLConfig connectionStr;

        public FlightRepository(PostgreSQLConfig connectionString)
        {
            connectionStr = connectionString;
        }

        protected NpgsqlConnection dbConnection()
        {
            return new NpgsqlConnection(connectionStr.ConnectionStr);
        }
        public async Task<bool> DeleteFlight(Flight flight)
        {
            var db = dbConnection();
            var sql = @"DELETE
                        FROM public.""FLIGHT""
                        WHERE id = @id";
            var result = await db.ExecuteAsync(sql, new { id = flight.id });
            return result > 0;
        }

        public async Task<IEnumerable<Flight>> GetAllFlights()
        {
            var db = dbConnection();
            var sql = @"SELECT id,boarding_gate,price,status,route_code,airplane_plate
                       FROM public.""FLIGHT"" ";
            return await db.QueryAsync<Flight>(sql, new { });
        }

        public async Task<Flight> GetFlightDetails(int ID)
        {
            var db = dbConnection();
            var sql = @"SELECT id,boarding_gate,price,status,route_code,airplane_plate
                       FROM public.""FLIGHT"" 
                       WHERE id = @id";
            return await db.QueryFirstOrDefaultAsync<Flight>(sql, new { id = ID });
        }

        public async Task<bool> InsertFlight(Flight flight)
        {
            var db = dbConnection();
            var sql = @"
                        INSERT INTO public.""FLIGHT"" (boarding_gate,price,status,route_code,airplane_plate)
                        VALUES (@boarding_gate,@price,@status,@route_code,@airplane_plate)";
            var result = await db.ExecuteAsync(sql, new
            {

                flight.boarding_gate,
                flight.price,
                flight.status,
                flight.route_code,
                flight.airplane_plate
            });
            return result > 0;
        }

        public async Task<bool> UpdateFlight(Flight flight)
        {
            var db = dbConnection();
            var sql = @"
                        UPDATE public.""FLIGHT"" 
                        SET 
                            boarding_gate = @boarding_gate,
                            price = @price,
                            status = @status,
                            route_code = @route_code,
                            airplane_plate = @airplane_plate

                        WHERE id = @id";
            var result = await db.ExecuteAsync(sql, new
            {

                flight.boarding_gate,
                flight.price,
                flight.status,
                flight.route_code,
                flight.airplane_plate,
                flight.id

            });
            return result > 0;
        }
    }
}
