using System;
using Autofac;
using Thrift.Protocol;
using Thrift.Transport;
using ThriftCommon.Calculator;

namespace Client.Thrift
{
    internal class ThriftAutoFac
    {
        static ThriftAutoFac()
        {
            var builder = new ContainerBuilder();

            builder.RegisterType<MathAdapter>().As<IMath>().InstancePerDependency();

            builder.Register(c => CreateCalculatorClient());
        }

        private static Calculator.Iface CreateCalculatorClient()
        {
            var uri = new Uri("http://localhost:43857/any-url.thrift");
            var httpClient = new THttpClient(uri);
            var jsonProtocol = new TJSONProtocol(httpClient);
            var calculator = new Calculator.Client(jsonProtocol);

            return calculator;
        }

        public static void Init(ContainerBuilder builder)
        {
            builder.RegisterType<MathAdapter>().As<IMath>().InstancePerDependency();

            builder.Register(c => CreateCalculatorClient());
        }
    }
}