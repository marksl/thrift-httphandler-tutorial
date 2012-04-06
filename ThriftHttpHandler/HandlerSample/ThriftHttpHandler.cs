using System;
using System.IO;
using System.Text;
using System.Web;
using Thrift;
using Thrift.Protocol;
using Thrift.Transport;

namespace HandlerSample
{
    public class ThriftHttpHandler : IHttpHandler
    {
        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "application/x-thrift";
            context.Response.ContentEncoding = Encoding.UTF8;

            ProcessRequest(context.Request.InputStream, context.Response.OutputStream);
        }

        private static void ProcessRequest(Stream input, Stream output)
        {
            TTransport transport = new TStreamTransport(input, output);

            var protocolFactory = CreateJsonFactory();
            var processor = CreateProcessor();
            try
            {
                TProtocol inputProtocol = protocolFactory.GetProtocol(transport);
                TProtocol outputProtocol = protocolFactory.GetProtocol(transport);

                while (processor.Process(inputProtocol, outputProtocol)) { }
            }
            catch (TTransportException)
            {
                // Client died, just move on
            }
            catch (TApplicationException tx)
            {
                Console.Error.Write(tx);
            }
            catch (Exception x)
            {
                Console.Error.Write(x);
            }

            transport.Close();
        }

        private static Calculator.Processor CreateProcessor()
        {
            return new Calculator.Processor(new CalculatorImplementation());
        }

        private static TJSONProtocol.Factory CreateJsonFactory()
        {
            return new TJSONProtocol.Factory();
        }

        public bool IsReusable
        {
            get { return true; }
        }
    }
}