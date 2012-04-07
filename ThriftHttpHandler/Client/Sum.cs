namespace Client
{
    public class Sum
    {
        public static int CalculateSum(params int[] numbers)
        {
            IMath math = MathFactory.CreateMath();

            int sum = 0;

            foreach(int number in numbers)
            {
                sum = math.Add(sum, number);
            }

            return sum;
        }
    }
}