using ThriftCommon.Calculator;

namespace Client.Thrift
{
    public class MathAdapter : IMath
    {
        private readonly Calculator.Iface _calculator;

        public MathAdapter(Calculator.Iface calculator)
        {
            _calculator = calculator;
        }

        #region IMath Members

        public int Add(int x, int y)
        {
            return Calculate(x, y, Operation.ADD);
        }

        public int Subtract(int x, int y)
        {
            return Calculate(x, y, Operation.SUBTRACT);
        }

        #endregion

        private int Calculate(int x, int y, Operation operation)
        {
            return _calculator.calculate(0, new Work {Num1 = x, Num2 = y, Op = operation});
        }
    }
}