using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TEC_Air_API_Model;

namespace TECAir_API_Data.Repositories
{
    /// <summary>
    /// Interface for Role relationship on database
    /// </summary>
    public interface IRoleRepository
    {
        /// <summary>
        /// Get all roles from database
        /// </summary>
        /// <returns>Array of Role type objects</returns>
        Task<IEnumerable<Role>> GetAllRoles();
        /// <summary>
        /// Ge Role by name from database
        /// </summary>
        /// <param name="name">role name</param>
        /// <returns>Role type object</returns>
        Task<Role> GetRoleDetails(string name);
        /// <summary>
        /// Insert role to database
        /// </summary>
        /// <param name="role">Role type object</param>
        /// <returns>true if inserted</returns>
        Task<bool> InsertRole(Role role);
        /// <summary>
        /// Update existing role from database
        /// </summary>
        /// <param name="role">Role type object</param>
        /// <returns>true if updated</returns>
        Task<bool> UpdateRole(Role role);
        /// <summary>
        /// Delete existing role from database
        /// </summary>
        /// <param name="role">Role type object</param>
        /// <returns>true if deleted</returns>
        Task<bool> DeleteRole(Role role);
    }
}
