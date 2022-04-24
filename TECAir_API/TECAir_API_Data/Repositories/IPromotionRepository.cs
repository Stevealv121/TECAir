using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TEC_Air_API_Model;

namespace TECAir_API_Data.Repositories
{
    /// <summary>
    /// Interface for Promotion relationship on database
    /// </summary>
    public interface IPromotionRepository
    {
        /// <summary>
        /// Get all promotions from database
        /// </summary>
        /// <returns>Array of Promotion type objects</returns>
        Task<IEnumerable<Promotion>> GetAllPromotions();
        /// <summary>
        /// Get promotion from database by promotion code
        /// </summary>
        /// <param name="promo_code">promotion code</param>
        /// <returns></returns>
        Task<Promotion> GetPromotionDetails(int promo_code);
        /// <summary>
        /// Insert promotion to database
        /// </summary>
        /// <param name="promotion">Promotion type object</param>
        /// <returns>Promotion id</returns>
        Task<int> InsertPromotion(Promotion promotion);
        /// <summary>
        /// Update existing promotion on databse
        /// </summary>
        /// <param name="promotion">Promotion type object</param>
        /// <returns>true if updated</returns>
        Task<bool> UpdatePromotion(Promotion promotion);
        /// <summary>
        /// Delete existing promotion from database
        /// </summary>
        /// <param name="promotion">Promotion type object</param>
        /// <returns>true if deleted</returns>
        Task<bool> DeletePromotion(Promotion promotion);
    }
}
