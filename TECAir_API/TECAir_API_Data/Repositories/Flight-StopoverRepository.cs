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
    public class Flight_StopoverRepository : IFlight_StopoverRepository
    {
        private PostgreSQLConfig connectionStr;
        public Flight_StopoverRepository(PostgreSQLConfig connectionString)
        {
            connectionStr = connectionString;
        }

        protected NpgsqlConnection dbConnection()
        {
            return new NpgsqlConnection(connectionStr.ConnectionStr);
        }
        public async Task<bool> DeleteFlightStopover(Flight_Stopover flightStopover)
        {
            var db = dbConnection();
            var sql = @"DELETE
                        FROM public.""Flight Stopover""
                        WHERE flight_id = @flight_id";
            var result = await db.ExecuteAsync(sql, new { flight_id = flightStopover.flight_id });
            return result > 0;
        }

        public async Task<IEnumerable<Flight_Stopover>> GetAllFlightStopovers()
        {
            var db = dbConnection();
            var sql = @"SELECT flight_id,stopover
                       FROM public.""Flight Stopover"" ";
            return await db.QueryAsync<Flight_Stopover>(sql, new { });
        }

        public async Task<Flight_Stopover> GetFlightStopoverDetails(int flght_id)
        {
            var db = dbConnection();
            var sql = @"SELECT flight_id,stopover
                       FROM public.""Flight Stopover"" 
                       WHERE flight_id = @flight_id";
            return await db.QueryFirstOrDefaultAsync<Flight_Stopover>(sql, new { flight_id = flght_id });
        }

        public async Task<bool> InsertFlightStopover(Flight_Stopover flightStopover)
        {
            var db = dbConnection();
            var sql = @"
                        INSERT INTO public.""Flight Stopover"" (flight_id,stopover)
                        VALUES (@flight_id,@stopover)";
            var result = await db.ExecuteAsync(sql, new
            {
                flightStopover.flight_id,
                flightStopover.stopover
            });
            return result > 0;
        }

        public async Task<bool> UpdateFlightStopover(Flight_Stopover flightStopover)
        {
            var db = dbConnection();
            var sql = @"
                        UPDATE public.""Flight Stopover"" 
                        SET 
                            flight_id = @flight_id,
                            stopover = @stopover
                        WHERE flight_id = @flight_id";
            var result = await db.ExecuteAsync(sql, new
            {
                flightStopover.flight_id,
                flightStopover.stopover

            });
            return result > 0;
        }
    }
}
