using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TEC_Air_API_Model;

namespace TECAir_API_Data.Repositories
{
    /// <summary>
    /// Interface for AppliesTo relationship on database
    /// </summary>
    public interface IAppliesToRepository
    {
        /// <summary>
        /// Get all applies to relation from database
        /// </summary>
        /// <returns>Array of AppliesTo type objects</returns>
        Task<IEnumerable<AppliesTo>> GetAllAppliesTo();
        /// <summary>
        /// Get applies to relation from promotion code
        /// </summary>
        /// <param name="promo_code">Promotion code</param>
        /// <returns>Array of flight ids</returns>
        Task<IEnumerable<string>> GetAppliesToDetails(int promo_code);
        /// <summary>
        /// Get promotion info from flight id
        /// </summary>
        /// <param name="flght_id">Flight id</param>
        /// <returns>Array of Promotion?AppliesTo objects</returns>
        Task<IEnumerable<Promotion_AppliesTo>> GetPromoAppliesTo(int flght_id);
        /// <summary>
        /// Insert applies to relation to databes
        /// </summary>
        /// <param name="applies_to">AppliesTo object</param>
        /// <returns>true if inserted</returns>
        Task<bool> InsertAppliesTo(AppliesTo applies_to);
        /// <summary>
        /// Update existing AppliesTo relation
        /// </summary>
        /// <param name="applies_to">AppliesTo object</param>
        /// <returns>true if updated</returns>
        Task<bool> UpdateAppliesTo(AppliesTo applies_to);
        /// <summary>
        /// Delete existing AppliesTo relation
        /// </summary>
        /// <param name="applies_to">Applies to object</param>
        /// <returns>true if deleted</returns>
        Task<bool> DeleteAppliesTo(AppliesTo applies_to);
    }
}
