using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace WebApplication1.Models
{
    //Class containing all attributes of the product database
    public class Product
    {
        public long productId { get; set; }
        public String productName { get; set; }
        public String productOrg { get; set; }
        public long productPrice { get; set; }
        public DateTime productDate { get; set; }
    }
}