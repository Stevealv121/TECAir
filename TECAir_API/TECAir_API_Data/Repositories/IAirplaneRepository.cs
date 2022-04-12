using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TEC_Air_API_Model;

namespace TECAir_API_Data.Repositories
{
    public interface IAirplaneRepository
    {
        Task<IEnumerable<Airplane>> GetAllAirplanes();
        Task<Airplane> GetAirplaneDetails(string plate);
        Task<bool> InsertAirplane(Airplane airplane);
        Task<bool> UpdateAirplane(Airplane airplane);
        Task<bool> DeleteAirplane(Airplane airplane);
    }
}
