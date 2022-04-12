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
    public class RouteRepository : IRouteRepository
    {
        private PostgreSQLConfig connectionStr;

        public RouteRepository(PostgreSQLConfig connectionString)
        {
            connectionStr = connectionString;
        }

        protected NpgsqlConnection dbConnection()
        {
            return new NpgsqlConnection(connectionStr.ConnectionStr);
        }

        public async Task<bool> DeleteRoute(Route route)
        {
            var db = dbConnection();
            var sql = @"DELETE
                        FROM public.""ROUTE""
                        WHERE route_code = @id";
            var result = await db.ExecuteAsync(sql, new { id = route.route_code });
            return result > 0;
        }

        public async Task<IEnumerable<Route>> GetAllRoutes()
        {
            var db = dbConnection();
            var sql = @"SELECT route_code,origin,destination,year,month,day,hours,minutes
                       FROM public.""ROUTE"" ";
            return await db.QueryAsync<Route>(sql, new { });
        }

        public async Task<Route> GetRouteDetails(int id)
        {
            var db = dbConnection();
            var sql = @"SELECT route_code,origin,destination,year,month,day,hours,minutes
                       FROM public.""ROUTE"" 
                       WHERE route_code = @Id";
            return await db.QueryFirstOrDefaultAsync<Route>(sql, new { Id = id });
        }

        public async Task<bool> InsertRoute(Route route)
        {
            var db = dbConnection();
            var sql = @"
                        INSERT INTO public.""ROUTE"" (origin,destination,year,month,day,hours,minutes)
                        VALUES (@origin,@destination,@year,@month,@day,@hours,@minutes)";
            var result = await db.ExecuteAsync(sql, new
            {
                route.origin,
                route.destination,
                route.year,
                route.month,
                route.day,
                route.hours,
                route.minutes
            });
            return result > 0;
        }

        public async Task<bool> UpdateRoute(Route route)
        {
            var db = dbConnection();
            var sql = @"
                        UPDATE public.""ROUTE"" 
                        SET 
                            origin = @origin,
                            destination = @destination,
                            year = @year,
                            month = @month,
                            day = @day,
                            hours = @hours,
                            minutes = @minutes
                        WHERE route_code = @route_code";
            var result = await db.ExecuteAsync(sql, new
            {
                route.origin,
                route.destination,
                route.year,
                route.month,
                route.day,
                route.hours,
                route.minutes,
                route.route_code

            });
            return result > 0;
        }
    }
}
