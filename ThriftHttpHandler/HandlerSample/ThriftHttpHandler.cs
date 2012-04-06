using Thrift.Protocol;
using Thrift.Transport;

namespace HandlerSample
{
    public class ThriftHttpHandler : THttpHandler
    {
        public ThriftHttpHandler()
            : base(CreateProcessor(), CreateJsonFactory())
        {
        }

        private static Calculator.Processor CreateProcessor()
        {
            return new Calculator.Processor(new CalculatorImplementation());
        }

        private static TJSONProtocol.Factory CreateJsonFactory()
        {
            return new TJSONProtocol.Factory();
        }
    }
}