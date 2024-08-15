using Microsoft.AspNetCore.Mvc;
using System.Net;
using WellmanReactCore.Server.Models;

namespace WellmanReactCore.Server.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class ActivityController : ControllerBase
    {

        private readonly WellmanContext _wellmanContext;

        public ActivityController(WellmanContext wellmanContext)
        {
            _wellmanContext = wellmanContext;
        }




        [HttpPost]
        public IActionResult Create(Activity activity )
        {

            try
            {    activity.Id = Guid.NewGuid().ToString();
                _wellmanContext.Activities.Add(activity);
                _wellmanContext.SaveChanges();
                return StatusCode((int)HttpStatusCode.OK);
            }
            catch 
            {
               return  StatusCode((int)HttpStatusCode.InternalServerError);
            }
            
        }



        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                var result = new List<Activity>();
                result = _wellmanContext.Activities.ToList();
                return Ok(result);
            }
            catch
            {
                return StatusCode((int)HttpStatusCode.InternalServerError);
            }
        }

    }
}
