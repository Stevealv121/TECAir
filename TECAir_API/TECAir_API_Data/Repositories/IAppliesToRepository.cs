using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TEC_Air_API_Model;

namespace TECAir_API_Data.Repositories
{
    public interface IAppliesToRepository
    {
        Task<IEnumerable<AppliesTo>> GetAllAppliesTo();
        Task<IEnumerable<string>> GetAppliesToDetails(int promo_code);
        Task<int> GetAppliesToPrice(int flght_id);
        Task<bool> InsertAppliesTo(AppliesTo applies_to);
        Task<bool> UpdateAppliesTo(AppliesTo applies_to);
        Task<bool> DeleteAppliesTo(AppliesTo applies_to);
    }
}
