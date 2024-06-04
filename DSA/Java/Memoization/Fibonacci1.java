import java.util.Arrays;

class Fibonacci1 {

    public static int fibMemoization(int n, int dp[]) {
        /*
         * memoization is a top down approach to do DP, the basic idea behind DP is to
         * store values and use them to reduce calculating subproblems again and again.
         * We generally use table or map.
         */
        /*
         * When using memoization it takes extra Space Complexity since the useage of
         * recursion stack compared to tabulation
         */
        if (n == 0) {
            dp[n] = 0;
            return 0;
        }
        if (n == 1) {
            dp[n] = 1;
            return 1;
        }
        if (dp[n] != -1)
            return dp[n];

        dp[n] = fibMemoization(n - 1, dp) + fibMemoization(n - 2, dp);

        return dp[n];
        /*
         * 
         * TC: 0(N) since each call is being made once, and when the calls are being
         * made the second time, it takes O(1) time complexity since the values have
         * been computed before itself
         */

    }

    public static int[] fibTabulation(int n) {
        /*
         * To create tabulation start from base condition and reach the goal, that is
         * why it is called bottom up approach
         * See recurence relation, base conditions from memoisation to formulate the
         * table
         */
        if (n == 0)
            return new int[] { 0 };
        if (n == 1)
            return new int[] { 0, 1 };
        int dp[] = new int[n + 1];

        dp[0] = 0;
        dp[1] = 1;

        for (int i = 2; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }
        return dp;
    }

    public static int fibBest(int n) {
        /*
         * Note that there is a pattern formed to find the Nth fibonacci number and it
         * can be achieved with 2 variables
         * It has the best Space Complexity O(1) and all three solutions have the same
         * Time Complexity O(N)
         */

        if (n == 0)
            return 0;
        if (n == 1)
            return 1;

        int first = 0;
        int second = 1;
        int temp = 0;

        for (int i = 2; i <= n; i++) {
            temp = first + second;
            first = second;
            second = temp;
        }
        return temp;
    }

    public static void main(String[] args) {

        int n = 8;
        int dp[] = new int[n + 1];
        Arrays.fill(dp, -1);
        System.out.println("Fib Memoization: " + fibMemoization(n, dp) + " " + Arrays.toString(dp));

        System.out.println("Fib Tabulation: " + Arrays.toString(fibTabulation(n)));

        System.out.println("Fibonacci Best: " + fibBest(n));

    }
}