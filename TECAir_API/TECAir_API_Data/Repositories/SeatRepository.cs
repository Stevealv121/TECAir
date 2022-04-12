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
    public class SeatRepository : ISeatRepository
    {
        private PostgreSQLConfig connectionStr;

        public SeatRepository(PostgreSQLConfig connectionString)
        {
            connectionStr = connectionString;
        }

        protected NpgsqlConnection dbConnection()
        {
            return new NpgsqlConnection(connectionStr.ConnectionStr);
        }
        public async Task<bool> DeleteSeat(Seat seat)
        {
            var db = dbConnection();
            var sql = @"DELETE
                        FROM public.""SEAT""
                        WHERE id = @id";
            var result = await db.ExecuteAsync(sql, new { id = seat.id });
            return result > 0;
        }

        public async Task<IEnumerable<Seat>> GetAllSeats()
        {
            var db = dbConnection();
            var sql = @"SELECT id,description,state,user_id,airplane_plate
                       FROM public.""SEAT"" ";
            return await db.QueryAsync<Seat>(sql, new { });
        }

        public async Task<Seat> GetSeatDetails(int Id)
        {
            var db = dbConnection();
            var sql = @"SELECT id,description,state,user_id,airplane_plate
                       FROM public.""SEAT"" 
                       WHERE id = @id";
            return await db.QueryFirstOrDefaultAsync<Seat>(sql, new { id = Id });
        }

        public async Task<bool> InsertSeat(Seat seat)
        {
            var db = dbConnection();
            var sql = @"
                        INSERT INTO public.""SEAT"" (id,description,state,user_id,airplane_plate)
                        VALUES (@id,@description,@state,@user_id,@airplane_plate)";
            var result = await db.ExecuteAsync(sql, new
            {
                seat.id,
                seat.description,
                seat.state,
                seat.user_id,
                seat.airplane_plate
            });
            return result > 0;
        }

        public async Task<bool> UpdateSeat(Seat seat)
        {
            var db = dbConnection();
            var sql = @"
                        UPDATE public.""SEAT"" 
                        SET id = @id,
                            description = @description,
                            state = @state,
                            user_id = @user_id,
                            airplane_plate = @airplane_plate
                        WHERE id = @id";
            var result = await db.ExecuteAsync(sql, new
            {
                seat.id,
                seat.description,
                seat.state,
                seat.user_id,
                seat.airplane_plate
                

            });
            return result > 0;
        }
    }
}
