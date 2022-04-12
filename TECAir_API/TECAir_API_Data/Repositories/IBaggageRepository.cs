using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TEC_Air_API_Model;

namespace TECAir_API_Data.Repositories
{
    public interface IBaggageRepository
    {
        Task<IEnumerable<Baggage>> GetAllBaggage();
        Task<Baggage> GetBaggageDetails(int id);
        Task<bool> InsertBaggage(Baggage baggage);
        Task<bool> UpdateBaggage(Baggage baggage);
        Task<bool> DeleteBaggage(Baggage baggage);
    }
}
