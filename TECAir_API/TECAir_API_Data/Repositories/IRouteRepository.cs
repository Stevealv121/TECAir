using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TEC_Air_API_Model;

namespace TECAir_API_Data.Repositories
{
    /// <summary>
    /// Interface for Route relationship on database
    /// </summary>
    public interface IRouteRepository
    {
        /// <summary>
        /// Get all routes from database
        /// </summary>
        /// <returns>Array of Route type objects</returns>
        Task<IEnumerable<Route>> GetAllRoutes();
        /// <summary>
        /// Ge route by id from database
        /// </summary>
        /// <param name="id">route name</param>
        /// <returns>Route type object</returns>
        Task<Route> GetRouteDetails(int id);
        /// <summary>
        /// Insert route to database
        /// </summary>
        /// <param name="route">Route type object</param>
        /// <returns>true if inserted</returns>
        Task<bool> InsertRoute(Route route);
        /// <summary>
        /// Update existing route from database
        /// </summary>
        /// <param name="route">Route type object</param>
        /// <returns>true if updated</returns>
        Task<bool> UpdateRoute(Route route);
        /// <summary>
        /// Delete existing route from database
        /// </summary>
        /// <param name="route">Route type object</param>
        /// <returns>true if deleted</returns>
        Task<bool> DeleteRoute(Route route);
    }
}
