using Thrift.Protocol;
using Thrift.Transport;

namespace Thrift.HttpService
{
    public class CalculatorHttpHandler : THttpHandler
    {
        public CalculatorHttpHandler()
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