using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TEC_Air_API_Model;

namespace TECAir_API_Data.Repositories
{
    public interface IHasRepository
    {
        Task<IEnumerable<Has>> GetAllUserBaggage();
        Task<IEnumerable<string>> GetUserBaggageDetails(int usr_id);
        Task<int> GetUserBaggagePrice(int usr_id);
        Task<bool> InsertUserBaggage(Has usr_baggage);
        Task<bool> UpdateUserBaggage(Has usr_baggage);
        Task<bool> DeleteUserBaggage(Has usr_baggage);
    }
}
