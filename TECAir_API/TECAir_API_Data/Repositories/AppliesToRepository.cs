﻿using Dapper;
using Npgsql;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TEC_Air_API_Model;

namespace TECAir_API_Data.Repositories
{
    public class AppliesToRepository : IAppliesToRepository
    {
        private PostgreSQLConfig connectionStr;

        public AppliesToRepository(PostgreSQLConfig connectionString)
        {
            connectionStr = connectionString;
        }

        protected NpgsqlConnection dbConnection()
        {
            return new NpgsqlConnection(connectionStr.ConnectionStr);
        }
        public async Task<bool> DeleteAppliesTo(AppliesTo applies_to)
        {
            var db = dbConnection();
            var sql = @"DELETE
                        FROM public.""Applies to""
                        WHERE flight_id = @flight_id";
            var result = await db.ExecuteAsync(sql, new { flight_id = applies_to.flight_id });
            return result > 0;
        }

        public async Task<IEnumerable<AppliesTo>> GetAllAppliesTo()
        {
            var db = dbConnection();
            var sql = @"SELECT *
                       FROM public.""Applies to"" ";
            return await db.QueryAsync<AppliesTo>(sql, new { });
        }

        public async Task<IEnumerable<string>> GetAppliesToDetails(int promo_code)
        {
            var db = dbConnection();
            var sql = @"SELECT flight_id
                       FROM public.""Applies to"" 
                       WHERE promotion_code = @promotion_code";
            var result = await db.QueryAsync<string>(sql, new { promotion_code = promo_code });

            return result;
        }

        public async Task<int> GetAppliesToPrice(int flght_id)
        {
            var db = dbConnection();
            var sql = @"SELECT promotion_code FROM public.""FLIGHT""
                        NATURAL JOIN public.""Applies to""
                        WHERE flight_id = @flight_id";
            var promotionCode = await db.QueryFirstOrDefaultAsync<int>(sql, new { flight_id = flght_id });

            var sql2 = @"SELECT discount 
                        FROM public.""PROMOTION""
                        WHERE promotion_code = @promotion_code";
            var promotionPrice = await db.QueryFirstOrDefaultAsync<int>(sql2, new { promotion_code = promotionCode });

            var sql3 = @"SELECT price 
                        FROM public.""FLIGHT""
                        WHERE id = @id";
            var flightPrice = await db.QueryFirstOrDefaultAsync<int>(sql3, new { id = flght_id });

            return ((100-promotionPrice)*flightPrice)/100;
        }

        public async Task<bool> InsertAppliesTo(AppliesTo applies_to)
        {
            var db = dbConnection();
            var sql = @"
                        INSERT INTO public.""Applies to"" (promotion_code, flight_id, final_price)
                        VALUES (@promotion_code, @flight_id, @final_price)";
            var result = await db.ExecuteAsync(sql, new
            {
                applies_to.promotion_code,
                applies_to.flight_id,
                applies_to.final_price
            });
            return result > 0;
        }

        public async Task<bool> UpdateAppliesTo(AppliesTo applies_to)
        {
            var db = dbConnection();
            var sql = @"
                        UPDATE public.""Applies to"" 
                        SET promotion_code = @promotion_code,
                            flight_id = @flight_id,
                            final_price = @final_price
                        WHERE flight_id = @flight_id";
            var result = await db.ExecuteAsync(sql, new
            {
                applies_to.promotion_code,
                applies_to.flight_id,
                applies_to.final_price
            });
            return result > 0;
        }
    }
}