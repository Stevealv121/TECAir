using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TEC_Air_API_Model;

namespace TECAir_API_Data.Repositories
{
    public interface IPromotionRepository
    {
        Task<IEnumerable<Promotion>> GetAllPromotions();
        Task<Promotion> GetPromotionDetails(int promo_code);
        Task<int> InsertPromotion(Promotion promotion);
        Task<bool> UpdatePromotion(Promotion promotion);
        Task<bool> DeletePromotion(Promotion promotion);
    }
}
