using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApplication1.Controllers
{
    public class ValuesController : ApiController
    {
        // GET api/values and check if its json response
        public HttpResponseMessage Get()
        {
            DataTable dt = new DataTable();

            dt.Columns.Add("productId");
            dt.Columns.Add("productName");
            dt.Columns.Add("productOrg");
            dt.Columns.Add("productPrice");
            dt.Columns.Add("productDate");

            dt.Rows.Add(1, "Super mario Bros", "Nintendo", 39, "5-12-1989");
            dt.Rows.Add(2, "Donkey Kong", "Nintendo", 29, "5-10-1981");
            dt.Rows.Add(3, "League of Legends", "Riot", 0, "15-06-2020");
            dt.Rows.Add(4, "Call of duty", "Activision", 49, "21-11-2019");
            dt.Rows.Add(5, "FIFA 2020", "EA", 49, "5-12-2020");

            return Request.CreateResponse(HttpStatusCode.OK, dt);
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
