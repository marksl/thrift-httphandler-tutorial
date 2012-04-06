using System;
using System.Collections.Generic;

namespace HandlerSample
{
    public class CalculatorImplementation : Calculator.Iface
    {
        private readonly Dictionary<int, SharedStruct> log;

        public CalculatorImplementation()
        {
            log = new Dictionary<int, SharedStruct>();
        }

        #region Iface Members

        public void ping()
        {
            Console.WriteLine("ping()");
        }

        public int add(int n1, int n2)
        {
            Console.WriteLine("add({0},{1})", n1, n2);
            return n1 + n2;
        }

        public int calculate(int logid, Work work)
        {
            Console.WriteLine("calculate({0}, [{1},{2},{3}])", logid, work.Op, work.Num1, work.Num2);
            int val = 0;
            switch (work.Op)
            {
                case Operation.ADD:
                    val = work.Num1 + work.Num2;
                    break;

                case Operation.SUBTRACT:
                    val = work.Num1 - work.Num2;
                    break;

                case Operation.MULTIPLY:
                    val = work.Num1*work.Num2;
                    break;

                case Operation.DIVIDE:
                    if (work.Num2 == 0)
                    {
                        var io = new InvalidOperation();
                        io.What = (int) work.Op;
                        io.Why = "Cannot divide by 0";
                        throw io;
                    }
                    val = work.Num1/work.Num2;
                    break;

                default:
                    {
                        var io = new InvalidOperation();
                        io.What = (int) work.Op;
                        io.Why = "Unknown operation";
                        throw io;
                    }
            }

            var entry = new SharedStruct();
            entry.Key = logid;
            entry.Value = val.ToString();
            log[logid] = entry;

            return val;
        }

        public SharedStruct getStruct(int key)
        {
            Console.WriteLine("getStruct({0})", key);
            return log[key];
        }

        public void zip()
        {
            Console.WriteLine("zip()");
        }

        #endregion
    }
}