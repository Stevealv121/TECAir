using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TEC_Air_API_Model;

namespace TECAir_API_Data.Repositories
{
    /// <summary>
    /// Interface for Airplane relationship on database
    /// </summary>
    public interface IAirplaneRepository
    {
        /// <summary>
        /// Gets all airplanes from database
        /// </summary>
        /// <returns>Array of Airplane type objects</returns>
        Task<IEnumerable<Airplane>> GetAllAirplanes();
        /// <summary>
        /// Get airplane from database by plate
        /// </summary>
        /// <param name="plate">Airplane plate</param>
        /// <returns>Airplane type object</returns>
        Task<Airplane> GetAirplaneDetails(string plate);
        /// <summary>
        /// Insert airplane to database
        /// </summary>
        /// <param name="airplane">Airplane object</param>
        /// <returns>true if inserted</returns>
        Task<bool> InsertAirplane(Airplane airplane);
        /// <summary>
        /// Update existing plane on database
        /// </summary>
        /// <param name="airplane">Airplane object</param>
        /// <returns>true if updated</returns>
        Task<bool> UpdateAirplane(Airplane airplane);
        /// <summary>
        /// Delete existing airplane 
        /// </summary>
        /// <param name="airplane">Airplane object</param>
        /// <returns>true if deleted</returns>
        Task<bool> DeleteAirplane(Airplane airplane);
    }
}
