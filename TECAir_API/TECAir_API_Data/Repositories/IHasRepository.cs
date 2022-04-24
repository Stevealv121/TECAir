using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TEC_Air_API_Model;

namespace TECAir_API_Data.Repositories
{
    /// <summary>
    /// Interface for Has relationship on database
    /// </summary>
    public interface IHasRepository
    {
        /// <summary>
        /// Get all user baggage from database
        /// </summary>
        /// <returns>Array of Has type objects</returns>
        Task<IEnumerable<Has>> GetAllUserBaggage();
        /// <summary>
        /// Get user baggage by user id
        /// </summary>
        /// <param name="usr_id">User id</param>
        /// <returns>Array of strings with baggage ids</returns>
        Task<IEnumerable<string>> GetUserBaggageDetails(int usr_id);
        /// <summary>
        /// Get baggage price by user id
        /// </summary>
        /// <param name="usr_id">User id</param>
        /// <returns>Total price</returns>
        Task<int> GetUserBaggagePrice(int usr_id);
        /// <summary>
        /// Insert has relation to database
        /// </summary>
        /// <param name="usr_baggage">Has type object</param>
        /// <returns>true if inserted</returns>
        Task<bool> InsertUserBaggage(Has usr_baggage);
        /// <summary>
        /// Update existing Has on database
        /// </summary>
        /// <param name="usr_baggage">Has type object</param>
        /// <returns>true if updated</returns>
        Task<bool> UpdateUserBaggage(Has usr_baggage);
        /// <summary>
        /// Delete existing has relation on database by user id and baggage id
        /// </summary>
        /// <param name="usr_baggage">Has type object</param>
        /// <returns>true if deleted</returns>
        Task<bool> DeleteUserBaggage(Has usr_baggage);
        /// <summary>
        /// Delete existing has relation on database by baggage id
        /// </summary>
        /// <param name="usr_baggage">Has type object</param>
        /// <returns>true if deleted</returns>
        Task<bool> DeleteBaggagebyId(Has usr_baggage);
    }
}
