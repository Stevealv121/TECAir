using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TECAir_API_Data
{
    public class PostgreSQLConfig
    {
        public PostgreSQLConfig(string connectionStr) => ConnectionStr = connectionStr;
        public string ConnectionStr { get; set; }

    }
}
