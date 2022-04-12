using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TEC_Air_API_Model;

namespace TECAir_API_Data.Repositories
{
    public interface IRouteRepository
    {
        Task<IEnumerable<Route>> GetAllRoutes();
        Task<Route> GetRouteDetails(int id);
        Task<bool> InsertRoute(Route route);
        Task<bool> UpdateRoute(Route route);
        Task<bool> DeleteRoute(Route route);
    }
}
