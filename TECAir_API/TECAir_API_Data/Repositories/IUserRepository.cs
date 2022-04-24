using System;
using TEC_Air_API_Model;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TECAir_API_Data.Repositories
{
    /// <summary>
    /// Interface for User relationship on database
    /// </summary>
    public interface IUserRepository
    {
        /// <summary>
        /// Get all users from database
        /// </summary>
        /// <returns>Array of User type objects</returns>
        Task<IEnumerable<User>> GetAllUsers();
        /// <summary>
        /// Get users by email and password from database
        /// </summary>
        /// <param name="email">Email</param>
        /// <param name="password">Password</param>
        /// <returns></returns>
        Task<User> GetUserDetails(string email, string password);
        /// <summary>
        /// Insert user to database
        /// </summary>
        /// <param name="user">User type object</param>
        /// <returns>true if inserted</returns>
        Task<bool> InsertUser(User user);
        /// <summary>
        /// Update existing user from database
        /// </summary>
        /// <param name="user">User type object</param>
        /// <returns>true if updated</returns>
        Task<bool> UpdateUser(User user);
        /// <summary>
        /// Delete existing user from database
        /// </summary>
        /// <param name="user">User type object</param>
        /// <returns>true if deleted</returns>
        Task<bool> DeleteUser(User user);

    }
}
