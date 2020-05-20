using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Command
    {
        public long commandId { get; set; }
        public String productName { get; set; }
        public DateTime commandDate { get; set; }
        public String commandDescription { get; set; }
    }
}