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
    public class PromotionRepository : IPromotionRepository
    {
        private PostgreSQLConfig connectionStr;

        public PromotionRepository(PostgreSQLConfig connectionString)
        {
            connectionStr = connectionString;
        }

        protected NpgsqlConnection dbConnection()
        {
            return new NpgsqlConnection(connectionStr.ConnectionStr);
        }
        public async Task<bool> DeletePromotion(Promotion promotion)
        {
            var db = dbConnection();
            var sql = @"DELETE
                        FROM public.""PROMOTION""
                        WHERE promotion_code = @promotion_code";
            var result = await db.ExecuteAsync(sql, new { promotion_code = promotion.promotion_code });
            return result > 0;
        }

        public async Task<IEnumerable<Promotion>> GetAllPromotions()
        {
            var db = dbConnection();
            var sql = @"SELECT promotion_code,description,title,day,month,year,discount
                       FROM public.""PROMOTION"" ";
            return await db.QueryAsync<Promotion>(sql, new { });
        }

        public async Task<Promotion> GetPromotionDetails(int promo_code)
        {
            var db = dbConnection();
            var sql = @"SELECT promotion_code,description,title,day,month,year,discount
                       FROM public.""PROMOTION"" 
                       WHERE promotion_code = @promotion_code";
            return await db.QueryFirstOrDefaultAsync<Promotion>(sql, new { promotion_code = promo_code });
        }

        public async Task<int> InsertPromotion(Promotion promotion)
        {
            var db = dbConnection();
            var sql = @"
                        INSERT INTO public.""PROMOTION"" (description,title,day,month,year,discount)
                        VALUES (@description,@title,@day,@month,@year,@discount) RETURNING promotion_code";
            var result = await db.QueryFirstOrDefaultAsync<int>(sql, new
            {

                promotion.description,
                promotion.title,
                promotion.day,
                promotion.month,
                promotion.year,
                promotion.discount
            });
            return result;
        }

        public async Task<bool> UpdatePromotion(Promotion promotion)
        {
            var db = dbConnection();
            var sql = @"
                        UPDATE public.""PROMOTION"" 
                        SET 
                            description = @description,
                            title = @title,
                            day = @day,
                            month = @month,
                            year = @year,
                            discount = @discount
                        WHERE promotion_code = @promotion_code";
            var result = await db.ExecuteAsync(sql, new
            {

                promotion.description,
                promotion.title,
                promotion.day,
                promotion.month,
                promotion.year,
                promotion.discount,
                promotion.promotion_code

            });
            return result > 0;
        }
    }
}
