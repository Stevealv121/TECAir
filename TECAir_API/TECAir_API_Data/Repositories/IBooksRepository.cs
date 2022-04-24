using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TEC_Air_API_Model;

namespace TECAir_API_Data.Repositories
{
    /// <summary>
    /// Interface for Books relationship on database
    /// </summary>
    public interface IBooksRepository
    {
        /// <summary>
        /// Get all reservations from database
        /// </summary>
        /// <returns>Array of Books type object</returns>
        Task<IEnumerable<Books>> GetAllReservation();
        /// <summary>
        /// Get reservations from flight id
        /// </summary>
        /// <param name="flght_id">Flight id</param>
        /// <returns>Book type object</returns>
        Task<Books> GetReservationDetails(int flght_id);
        /// <summary>
        /// Get reservation from user id
        /// </summary>
        /// <param name="usr_id">User id</param>
        /// <returns>Books type object</returns>
        Task<Books> GetReservationDetailsbyUser(int usr_id);
        /// <summary>
        /// Isert reservation to database
        /// </summary>
        /// <param name="reservation">Books type object</param>
        /// <returns>true if inserted</returns>
        Task<bool> InsertReservation(Books reservation);
        /// <summary>
        /// Update existing reservation
        /// </summary>
        /// <param name="reservation">Books type object</param>
        /// <returns>true if updated</returns>
        Task<bool> UpdateReservation(Books reservation);
        /// <summary>
        /// Delete existing reservations by user id
        /// </summary>
        /// <param name="reservation">Books type object</param>
        /// <returns>true if deleted</returns>
        Task<bool> DeleteReservation(Books reservation);
        /// <summary>
        /// Delete existing reservations by flight id
        /// </summary>
        /// <param name="reservation">Books type object</param>
        /// <returns>true if deleted</returns>
        Task<bool> DeleteReservationFlight(Books reservation);
    }
}
