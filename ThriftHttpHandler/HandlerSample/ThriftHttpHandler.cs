using System.Web;

namespace HandlerSample
{
    public class ThriftHttpHandler : IHttpHandler
    {
        public void ProcessRequest(HttpContext context)
        {
            context.Response.Write("Hellow World");
        }

        public bool IsReusable
        {
            get { return true; }
        }
    }
}