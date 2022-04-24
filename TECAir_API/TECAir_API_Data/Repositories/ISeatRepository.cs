using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TEC_Air_API_Model;

namespace TECAir_API_Data.Repositories
{
    /// <summary>
    /// Interface for Seat relationship on database
    /// </summary>
    public interface ISeatRepository
    {
        /// <summary>
        /// Get all setas from database
        /// </summary>
        /// <returns>Array of Seat type objects</returns>
        Task<IEnumerable<Seat>> GetAllSeats();
        /// <summary>
        /// Get seat by id from database
        /// </summary>
        /// <param name="id">seat id</param>
        /// <returns>Role type object</returns>
        Task<Seat> GetSeatDetails(int id);
        /// <summary>
        /// Get Seat by airplane plate from database
        /// </summary>
        /// <param name="airplane_plate">airplane plate</param>
        /// <returns>Array of Seat type object</returns>
        Task<IEnumerable<Seat>> GetSeatDetailsbyPlate(string airplane_plate);
        /// <summary>
        /// Insert seat to database
        /// </summary>
        /// <param name="seat">Seat type object</param>
        /// <returns>true if inserted</returns>
        Task<bool> InsertSeat(Seat seat);
        /// <summary>
        /// Update existing seat from database
        /// </summary>
        /// <param name="seat">Seat type object</param>
        /// <returns>true if updated</returns>
        Task<bool> UpdateSeat(Seat seat);
        /// <summary>
        /// Delete existing seat from database
        /// </summary>
        /// <param name="seat">Seat type object</param>
        /// <returns>true if deleted</returns>
        Task<bool> DeleteSeat(Seat seat);
    }
}
