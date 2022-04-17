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
            var sql = @"SELECT *
                       FROM public.""FLIGHT"" ";
            return await db.QueryAsync<Flight>(sql, new { });
        }
        public async Task<IEnumerable<Flight_Route>> GetAllFlightandRoutes()
        {
            var db = dbConnection();
            var sql = @"SELECT * FROM public.""FLIGHT""
                        NATURAL JOIN public.""ROUTE"" ";
            return await db.QueryAsync<Flight_Route>(sql, new { });
        }

        public async Task<Flight> GetFlightDetails(int ID)
        {
            var db = dbConnection();
            var sql = @"SELECT id,boarding_gate,price,status,route_code,airplane_plate
                       FROM public.""FLIGHT"" 
                       WHERE id = @id";
            return await db.QueryFirstOrDefaultAsync<Flight>(sql, new { id = ID });
        }

        public async Task<IEnumerable<Flight_Route>> GetFlightByLocation(string _origin, string _destination)
        {
            var db = dbConnection();
            var sql = @"SELECT * FROM public.""FLIGHT""
                        NATURAL JOIN public.""ROUTE""  
                       WHERE destination = @destination AND origin = @origin";
            return await db.QueryAsync<Flight_Route>(sql, new 
            { 
                destination = _destination,
                origin = _origin
            });
        }
        public async Task<IEnumerable<Flight_User>> GetUsersByFlight(int id)
        {
            var db = dbConnection();
            

            var sql = @"SELECT  user_id,first_name,second_name,first_surname,second_surname 
                        FROM public.""Books""
                        INNER JOIN public.""FLIGHT"" ON flight_id = id
                        INNER JOIN public.""USER"" ON public.""Books"".user_id = public.""USER"".id
                        WHERE flight_id=@flight_id";
            var result = await db.QueryAsync<Flight_User>(sql, new
            {
                flight_id = id
            });
            
            return result;
        }
        public async Task<IEnumerable<Flight_Baggage>> GetBaggageByFlight(int id)
        {
            var db = dbConnection();
           

            var sql = @"SELECT baggage_id,user_id,first_name,second_name,first_surname,second_surname,public.""Has"".price 
                        FROM public.""Books""
                        INNER JOIN public.""FLIGHT"" ON flight_id = id
                        INNER JOIN public.""Has"" using (user_id)
                        INNER JOIN public.""BAGGAGE"" ON public.""Has"".baggage_id = public.""BAGGAGE"".id
                        INNER JOIN public.""USER"" ON public.""Has"".user_id = public.""USER"".id
                        WHERE flight_id= @flight_id";
            var result = await db.QueryAsync<Flight_Baggage>(sql, new
            {
                flight_id = id
            });
            
            return result;

        }
        public async Task<int> GetFlightCapacity(int id)
        {
            var db = dbConnection();


            var sql = @"SELECT COUNT(*)
                        FROM public.""FLIGHT""
                        INNER JOIN public.""AIRPLANE"" ON airplane_plate = plate
                        INNER JOIN public.""SEAT"" ON public.""SEAT"".airplane_plate = public.""AIRPLANE"".plate
                        WHERE public.""FLIGHT"".id= @flight_id";
            var result = await db.QueryFirstOrDefaultAsync<int>(sql, new{flight_id = id});

            return result;
        }
        public async Task<int> InsertFlight(Flight flight)
        {
            var db = dbConnection();
            var sql = @"
                        INSERT INTO public.""FLIGHT"" (boarding_gate,price,status,route_code,airplane_plate)
                        VALUES (@boarding_gate,@price,@status,@route_code,@airplane_plate) RETURNING id";
            var result = await db.QueryFirstOrDefaultAsync<int>(sql, new
            {

                flight.boarding_gate,
                flight.price,
                flight.status,
                flight.route_code,
                flight.airplane_plate
            });
            return result ;
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
