using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using WellmanReactCore.Server.Models;

namespace WellmanReactCore.Server.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class DailyCostController  : ControllerBase
    {
        readonly WellmanContext _wellmanContext;

        public DailyCostController(WellmanContext wellContext)
        {
            _wellmanContext = wellContext;

        }




        // POST: DailyCostController/Create
        [HttpPost]
        public IActionResult Create(DailyCost dailyCost)
        {
            try
            {
                 _wellmanContext.Add(dailyCost);
                _wellmanContext.SaveChanges();

                return StatusCode((int)HttpStatusCode.OK);
            }
            catch
            {
                return StatusCode((int)HttpStatusCode.InternalServerError);
            }
        }


    }
}
