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
    public class HasRepository : IHasRepository
    {
        private PostgreSQLConfig connectionStr;

        public HasRepository(PostgreSQLConfig connectionString)
        {
            connectionStr = connectionString;
        }

        protected NpgsqlConnection dbConnection()
        {
            return new NpgsqlConnection(connectionStr.ConnectionStr);
        }
        public async Task<bool> DeleteUserBaggage(Has usr_baggage)
        {
            var db = dbConnection();
            var sql = @"DELETE
                        FROM public.""Has""
                        WHERE user_id = @user_id";
            var result = await db.ExecuteAsync(sql, new { user_id = usr_baggage.user_id });
            return result > 0;
        }

        public async Task<IEnumerable<Has>> GetAllUserBaggage()
        {
            var db = dbConnection();
            var sql = @"SELECT *
                       FROM public.""Has"" ";
            return await db.QueryAsync<Has>(sql, new { });
        }

        public async Task<IEnumerable<string>> GetUserBaggageDetails(int usr_id)
        {
            var db = dbConnection();
            var sql = @"SELECT baggage_id
                       FROM public.""Has"" 
                       WHERE user_id = @user_id";
            var result = await db.QueryAsync<string>(sql, new { user_id = usr_id });
           
            return result;
        }
        public async Task<int> GetUserBaggagePrice(int usr_id)
        {
            var db = dbConnection();
            var sql = @"SELECT baggage_id
                       FROM public.""Has"" 
                       WHERE user_id = @user_id";
            var temp_result = await db.QueryAsync<string>(sql, new { user_id = usr_id });

            var suitcases = temp_result.ToArray().Length;
            int new_price = 0;
            if (suitcases == 2) new_price = 50;
            else if (suitcases >= 3) new_price = 175;


            return new_price;
        }

        public async Task<bool> InsertUserBaggage(Has usr_baggage)
        {
            var db = dbConnection();
            var sql = @"SELECT baggage_id
                       FROM public.""Has"" 
                       WHERE user_id = @user_id";
            var temp_result = await db.QueryAsync<string>(sql, new { user_id = usr_baggage.user_id });

            var suitcases = temp_result.ToArray().Length;
            usr_baggage.price = 0;
            if (suitcases == 1) usr_baggage.price = 50;
            else if (suitcases >= 2) usr_baggage.price = 75;

            var sql2 = @"
                        INSERT INTO public.""Has"" (baggage_id,user_id,price)
                        VALUES (@baggage_id,@user_id,@price)";
            var result = await db.ExecuteAsync(sql2, new
            {
                usr_baggage.baggage_id,
                usr_baggage.user_id,
                usr_baggage.price
            });
            return result > 0;
        }

        public async Task<bool> UpdateUserBaggage(Has usr_baggage)
        {
            var db = dbConnection();
            var sql = @"
                        UPDATE public.""Has"" 
                        SET baggage_id = @baggage_id,
                            user_id = @user_id,
                            price = @price
                        WHERE baggage_id = @baggage_id";
            var result = await db.ExecuteAsync(sql, new
            {
                usr_baggage.baggage_id,
                usr_baggage.user_id,
                usr_baggage.price
            });
            return result > 0;
        }
    }
}
