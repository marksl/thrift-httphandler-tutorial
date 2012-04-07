using Autofac;
using Client.Thrift;

namespace Client
{
    internal static class AutoFac
    {
        static AutoFac()
        {
            var builder = new ContainerBuilder();

            ThriftAutoFac.Init(builder);

            Container = builder.Build();
        }

        static internal IContainer Container { get; set; }
    }
}