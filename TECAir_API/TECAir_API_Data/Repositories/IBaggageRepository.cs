using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TEC_Air_API_Model;

namespace TECAir_API_Data.Repositories
{
    /// <summary>
    /// Interface for Baggage relationship on database
    /// </summary>
    public interface IBaggageRepository
    {
        /// <summary>
        /// Gets all baggage from database
        /// </summary>
        /// <returns>Array of Baggage type objects</returns>
        Task<IEnumerable<Baggage>> GetAllBaggage();
        /// <summary>
        /// Get baggage from id
        /// </summary>
        /// <param name="id">Baggage id</param>
        /// <returns>Baggage type object</returns>
        Task<Baggage> GetBaggageDetails(int id);
        /// <summary>
        /// Insert baggage to database
        /// </summary>
        /// <param name="baggage"> Baggage type object</param>
        /// <returns>Baggage id</returns>
        Task<int> InsertBaggage(Baggage baggage);
        /// <summary>
        /// Update existing baggage on database
        /// </summary>
        /// <param name="baggage">Baggae type object</param>
        /// <returns>true if updated</returns>
        Task<bool> UpdateBaggage(Baggage baggage);
        /// <summary>
        /// Delete existing baggage
        /// </summary>
        /// <param name="baggage">Baggage type object</param>
        /// <returns>true if deleted</returns>
        Task<bool> DeleteBaggage(Baggage baggage);
    }
}
