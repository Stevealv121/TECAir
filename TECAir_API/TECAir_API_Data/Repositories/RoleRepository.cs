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
    public class RoleRepository : IRoleRepository
    {
        private PostgreSQLConfig connectionStr;

        public RoleRepository(PostgreSQLConfig connectionString)
        {
            connectionStr = connectionString;
        }

        protected NpgsqlConnection dbConnection()
        {
            return new NpgsqlConnection(connectionStr.ConnectionStr);
        }
        public async Task<bool> DeleteRole(Role role)
        {
            var db = dbConnection();
            var sql = @"DELETE
                        FROM public.""ROLE""
                        WHERE name = @name";
            var result = await db.ExecuteAsync(sql, new { name = role.name });
            return result > 0;
        }

        public async Task<IEnumerable<Role>> GetAllRoles()
        {
            var db = dbConnection();
            var sql = @"SELECT name,description
                       FROM public.""ROLE"" ";
            return await db.QueryAsync<Role>(sql, new { });
        }

        public async Task<Role> GetRoleDetails(string Name)
        {
            var db = dbConnection();
            var sql = @"SELECT name,description
                       FROM public.""ROLE"" 
                       WHERE name = @name";
            return await db.QueryFirstOrDefaultAsync<Role>(sql, new { name = Name });
        }

        public async Task<bool> InsertRole(Role role)
        {
            var db = dbConnection();
            var sql = @"
                        INSERT INTO public.""ROLE"" (name,description)
                        VALUES (@name,@description)";
            var result = await db.ExecuteAsync(sql, new
            {
                role.name,
                role.description
            });
            return result > 0;
        }

        public async Task<bool> UpdateRole(Role role)
        {
            var db = dbConnection();
            var sql = @"
                        UPDATE public.""ROLE"" 
                        SET 
                            name = @name,
                            description = @description
                        WHERE name = @name";
            var result = await db.ExecuteAsync(sql, new
            {
                role.name,
                role.description

            });
            return result > 0;
        }
    }
}
