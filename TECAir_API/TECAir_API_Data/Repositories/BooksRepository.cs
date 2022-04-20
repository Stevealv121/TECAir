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
    public class BooksRepository : IBooksRepository
    {
        private PostgreSQLConfig connectionStr;

        public BooksRepository(PostgreSQLConfig connectionString)
        {
            connectionStr = connectionString;
        }

        protected NpgsqlConnection dbConnection()
        {
            return new NpgsqlConnection(connectionStr.ConnectionStr);
        }
        public async Task<bool> DeleteReservation(Books reservation)
        {
            var db = dbConnection();
            var sql = @"DELETE
                        FROM public.""Books""
                        WHERE user_id = @user_id";
            var result = await db.ExecuteAsync(sql, new { user_id = reservation.user_id });
            return result > 0;
        }
        public async Task<bool> DeleteReservationFlight(Books reservation)
        {
            var db = dbConnection();
            var sql = @"DELETE
                        FROM public.""Books""
                        WHERE flight_id = @flight_id";
            var result = await db.ExecuteAsync(sql, new { flight_id = reservation.flight_id });
            return result > 0;
        }

        public async Task<IEnumerable<Books>> GetAllReservation()
        {
            var db = dbConnection();
            var sql = @"SELECT user_id,flight_id
                       FROM public.""Books"" ";
            return await db.QueryAsync<Books>(sql, new { });
        }

        public async Task<Books> GetReservationDetails(int flght_id)
        {
            var db = dbConnection();
            var sql = @"SELECT user_id,flight_id
                       FROM public.""Books"" 
                       WHERE flight_id = @flight_id";
            return await db.QueryFirstOrDefaultAsync<Books>(sql, new { flight_id = flght_id });
        }

        public async Task<bool> InsertReservation(Books reservation)
        {
            var db = dbConnection();
            var sql = @"
                        INSERT INTO public.""Books"" (user_id,flight_id)
                        VALUES (@user_id,@flight_id)";
            var result = await db.ExecuteAsync(sql, new
            {
                reservation.user_id,
                reservation.flight_id
            });
            return result > 0;
        }

        public async Task<bool> UpdateReservation(Books reservation)
        {
            var db = dbConnection();
            var sql = @"
                        UPDATE public.""Books"" 
                        SET user_id = @user_id,
                            flight_id = @flight_id
                        WHERE flight_id = @flight_id";
            var result = await db.ExecuteAsync(sql, new
            {
                reservation.user_id,
                reservation.flight_id
            });
            return result > 0;
        }
    }
}
