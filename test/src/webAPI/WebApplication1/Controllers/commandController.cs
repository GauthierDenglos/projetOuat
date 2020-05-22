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
    public class commandController : ApiController
    {
        //Get method to select every thing that is in the database Command
        public HttpResponseMessage Get()
        {
            DataTable db = new DataTable();
            string query = @"select commandId, productName, commandDate, commandDescription from dbo.Command";
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

        public string Post(Command command)
        {
            try
            {
                DataTable db = new DataTable();
                string query = @"insert into dbo.Command (productName, commandDate, commandDescription)
                    Values ('" + command.productName + @"',
                    '" + command.commandDate + @"',
                    '" + command.commandDescription + @"'
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
            catch (Exception ex)
            {
                return "Failed to add";
            }
        }

        public string Put(Command command)
        {
            try
            {
                DataTable db = new DataTable();
                string query = @"update dbo.Command set productName = '" + command.productName + @"'
                                , commandDate = '" + command.commandDate + @"'
                                , commandDescription = '" + command.commandDescription + @"'
                                where commandId = " + command.commandId + @"
                                ";
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["ProductAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                //fill the db with everything return by the Query
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(db);
                }
                return "Updated successfully";
            }
            catch (Exception ex)
            {
                return "Failed to update";
            }
        }

        //Delete the row corresponding to the id given in parameter
        public string Delete(int id)
        {
            try
            {
                DataTable db = new DataTable();
                string query = @" delete from dbo.Command where commandId = " + id;
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["ProductAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                //fill the db with everything return by the Query
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(db);
                }
                return "Deleted successfully";
            }
            catch (Exception ex)
            {
                return "Failed to delete";
            }
        }
    }
}
