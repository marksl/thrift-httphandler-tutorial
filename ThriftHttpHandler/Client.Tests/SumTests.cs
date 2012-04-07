using Xunit;

namespace Client.Tests
{
    public class SumTests
    {
        [Fact]
        public void CalculateSum_NoNumbers_ReturnsZeroSum()
        {
            int sum = Sum.CalculateSum();

            Assert.Equal(0, sum);
        }

        [Fact]
        public void CalculateSum_ThreeNumbersAdded_SumEqualsThreeNumbers()
        {
            var numbers = new[] {1, 2, 3};

            int sum = Sum.CalculateSum(numbers);

            Assert.Equal(6, sum);
        }
    }
}