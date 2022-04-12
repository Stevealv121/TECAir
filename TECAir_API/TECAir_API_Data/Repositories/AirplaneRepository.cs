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
    public class AirplaneRepository : IAirplaneRepository
    {
        private PostgreSQLConfig connectionStr;

        public AirplaneRepository(PostgreSQLConfig connectionString)
        {
            connectionStr = connectionString;
        }

        protected NpgsqlConnection dbConnection()
        {
            return new NpgsqlConnection(connectionStr.ConnectionStr);
        }

        public async Task<bool> DeleteAirplane(Airplane airplane)
        {
            var db = dbConnection();
            var sql = @"DELETE
                        FROM public.""AIRPLANE""
                        WHERE plate = @plate";
            var result = await db.ExecuteAsync(sql, new { plate = airplane.plate });
            return result > 0;

        }

        public async Task<Airplane> GetAirplaneDetails(string Plate)
        {
            var db = dbConnection();
            var sql = @"SELECT plate,model
                       FROM public.""AIRPLANE"" 
                       WHERE plate = @plate";
            return await db.QueryFirstOrDefaultAsync<Airplane>(sql, new { plate = Plate });
        }

        public async Task<IEnumerable<Airplane>> GetAllAirplanes()
        {
            var db = dbConnection();
            var sql = @"SELECT plate,model
                       FROM public.""AIRPLANE"" ";
            return await db.QueryAsync<Airplane>(sql, new { });
        }

        public async Task<bool> InsertAirplane(Airplane airplane)
        {
            var db = dbConnection();
            var sql = @"
                        INSERT INTO public.""AIRPLANE"" (plate,model)
                        VALUES (@plate,@model)";
            var result = await db.ExecuteAsync(sql, new
            {
                airplane.plate,
                airplane.model
            });
            return result > 0;

        }

        public async Task<bool> UpdateAirplane(Airplane airplane)
        {
            var db = dbConnection();
            var sql = @"
                        UPDATE public.""AIRPLANE"" 
                        SET 
                            plate = @plate,
                            model = @model
                        WHERE plate = @plate";
            var result = await db.ExecuteAsync(sql, new
            {
                airplane.plate,
                airplane.model

            });
            return result > 0;
        }
    }
}
