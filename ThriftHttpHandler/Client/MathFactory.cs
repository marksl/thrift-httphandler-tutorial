using Autofac;

namespace Client
{
    internal static class MathFactory
    {
        static internal IMath CreateMath()
        {
            return AutoFac.Container.Resolve<IMath>();
        }
    }
}