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
    public class BaggageRepository : IBaggageRepository
    {
        private PostgreSQLConfig connectionStr;

        public BaggageRepository(PostgreSQLConfig connectionString)
        {
            connectionStr = connectionString;
        }

        protected NpgsqlConnection dbConnection()
        {
            return new NpgsqlConnection(connectionStr.ConnectionStr);
        }
        public async Task<bool> DeleteBaggage(Baggage baggage)
        {
            var db = dbConnection();
            var sql = @"DELETE
                        FROM public.""BAGGAGE""
                        WHERE id = @id";
            var result = await db.ExecuteAsync(sql, new { id = baggage.id });
            return result > 0;
        }

        public async Task<IEnumerable<Baggage>> GetAllBaggage()
        {
            var db = dbConnection();
            var sql = @"SELECT id,color,weight
                       FROM public.""BAGGAGE"" ";
            return await db.QueryAsync<Baggage>(sql, new { });
        }

        public async Task<Baggage> GetBaggageDetails(int ID)
        {
            var db = dbConnection();
            var sql = @"SELECT id,color,weight
                       FROM public.""BAGGAGE"" 
                       WHERE id = @id";
            return await db.QueryFirstOrDefaultAsync<Baggage>(sql, new { id = ID });
        }

        public async Task<bool> InsertBaggage(Baggage baggage)
        {
            var db = dbConnection();
            var sql = @"
                        INSERT INTO public.""BAGGAGE"" (color,weight)
                        VALUES (@color,@weight)";
            var result = await db.ExecuteAsync(sql, new
            {
                
                baggage.color,
                baggage.weight
            });
            return result > 0;
        }

        public async Task<bool> UpdateBaggage(Baggage baggage)
        {
            var db = dbConnection();
            var sql = @"
                        UPDATE public.""BAGGAGE"" 
                        SET 
                            color = @color,
                            weight = @weight
                        WHERE id = @id";
            var result = await db.ExecuteAsync(sql, new
            {
                
                baggage.color,
                baggage.weight,
                baggage.id

            });
            return result > 0;
        }
    }
}
