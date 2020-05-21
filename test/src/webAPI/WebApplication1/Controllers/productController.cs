using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using WebApplication1.Models;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using System.Web.UI.WebControls;

namespace WebApplication1.Controllers
{
    public class productController : ApiController
    {
        //Get method to select every thing that is in the database Product
        public HttpResponseMessage Get()
        {
            DataTable db = new DataTable();
            string query = @"select productId, productName, productOrg, productPrice, productDate from  dbo.Product";
            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["ProductAppDB"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            //fill the db with everything return by the Query
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(db);
            }
            return Request.CreateResponse(HttpStatusCode.OK, db);
        }

        //Add an element in the database. Same principle as get, except for the query
        public string Post(Product product)
        {
            try
            {
                DataTable db = new DataTable();
                string query = @"insert into dbo.Product (productName, productOrg, productPrice, productDate)
                    Values ('" + product.productName + @"',
                    '" + product.productOrg + @"',
                    '" + product.productPrice + @"',
                    '" + product.productDate + @"'
                    )";
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["ProductAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                //fill the db with everything return by the Query
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(db);
                }
                return "Added successfully";
            }
            catch(Exception ex)
            {
                return "Failed to add";
            }
        }
    }
}
