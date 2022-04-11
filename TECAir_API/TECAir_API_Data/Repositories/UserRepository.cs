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
    public class UserRepository : IUserRepository

    {
        private PostgreSQLConfig connectionStr;

        public UserRepository (PostgreSQLConfig connectionString)
        {
            connectionStr = connectionString;
        }

        protected NpgsqlConnection dbConnection()
        {
            return new NpgsqlConnection(connectionStr.ConnectionStr);
        }
        public async Task<bool> DeleteUser(User user)
        {
            var db = dbConnection();
            var sql = @"DELETE
                        FROM public.""USER""
                        WHERE id = @id";
            var result = await db.ExecuteAsync(sql, new {id = user.id });
            return result > 0;
        }

        public async Task<IEnumerable<User>> GetAllUsers()
        {
            var db = dbConnection();
            var sql = @"SELECT id, email, first_name, second_name, first_surname, second_surname, phone, university, student_id,role_name
                       FROM public.""USER"" ";
            return await db.QueryAsync<User>(sql, new { });
                
        }

        public async Task<User> GetUserDetails(int id)
        {
            var db = dbConnection();
            var sql = @"SELECT id, email, first_name, second_name, first_surname, second_surname, phone, university, student_id,role_name
                       FROM public.""USER"" 
                        WHERE id = @Id";
            return await db.QueryFirstOrDefaultAsync<User>(sql, new {Id = id });
        }

        public async Task<bool> InsertUser(User user)
        {
            var db = dbConnection();
            var sql = @"
                        INSERT INTO public.""USER"" (id, email, first_name, second_name, first_surname, second_surname, phone, university, student_id,role_name)
                        VALUES (@id, @email, @first_name, @second_name, @first_surname, @second_surname, @phone, @university, @student_id,@role_name)";
            var result = await db.ExecuteAsync(sql, new { 
                                                            user.id, 
                                                            user.email, 
                                                            user.first_name, 
                                                            user.second_name,
                                                            user.first_surname, 
                                                            user.second_surname, 
                                                            user.phone, 
                                                            user.university,
                                                            user.student_id,
                                                            user.role_name });
            return result > 0;
        }

        public async Task<bool> UpdateUser(User user)
        {
            var db = dbConnection();
            var sql = @"
                        UPDATE public.""USER"" 
                        SET 
                            email = @email,
                            first_name = @first_name,
                            second_name = @second_name, 
                            first_surname = @first_surname, 
                            second_surname = @second_surname, 
                            phone = @phone, 
                            university = @university, 
                            student_id = @student_id,
                            role_name = @role_name
                        WHERE id = @id";
            var result = await db.ExecuteAsync(sql, new
                                                    {
                                                        user.email,
                                                        user.first_name,
                                                        user.second_name,
                                                        user.first_surname,
                                                        user.second_surname,
                                                        user.phone,
                                                        user.university,
                                                        user.student_id,
                                                        user.role_name,
                                                        user.id

                                                        });
            return result > 0;
        }
    }
}
