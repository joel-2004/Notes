import java.util.*;

public class Coin {
    public static int findAns(int amount, int arr[]) {
        int count = 0;
        LinkedHashMap<Integer, Integer> hm = new LinkedHashMap<>();
        Arrays.sort(arr);
        int i = arr.length - 1;
        while (i >= 0 && amount != 0) {
            // System.out.println(arr[i] + " " + amount);
            if (amount - arr[i] >= 0) {
                hm.put(arr[i], hm.getOrDefault(arr[i], 0) + 1);
                amount -= arr[i];
                count++;
            } else
                i--;
        }

        System.out.println(hm);
        return count;

    }

    public static void main(String[] args) {
        int amount = 118;
        int coins[] = new int[] { 1, 2, 5, 10 };
        System.out.println(findAns(amount, coins));
    }
}
