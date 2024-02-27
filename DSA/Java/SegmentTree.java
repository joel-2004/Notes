
class SegmentTree {
    static int arr[];
    static int seg[];

    static void build(int ind, int low, int high) {
        if (low == high) {
            seg[ind] = arr[low];
            return;
        }
        int mid = low + ((high - low) / 2);
        build(2 * ind + 1, low, mid);
        build(2 * ind + 2, mid + 1, high);

        seg[ind] = Math.max(seg[2 * ind + 1], seg[2 * ind + 2]);
    }

    static int findMax(int idx, int low, int high, int l, int r) {
        if (low >= l && high <= r) {
            return seg[idx];
        }

        if (high < l || low > r)
            return Integer.MIN_VALUE;

        int mid = low + ((high - low) / 2);
        int left = findMax(2 * idx + 1, low, mid, l, r);
        int right = findMax(2 * idx + 2, mid + 1, high, l, r);
        return Math.max(left, right);
    }

    public static void main(String[] args) {
        arr = new int[] { 8, 2, 5, 1, 4, 5, 3, 9, 6, 10 };
        int n = arr.length;
        seg = new int[n * 4];
        build(0, 0, n - 1);
        // System.out.println(Arrays.toString(seg));

        int q1 = findMax(0, 0, n - 1, 1, 4);
        int q2 = findMax(0, 0, n - 1, 3, 8);
        int q3 = findMax(0, 0, n - 1, 4, n - 1);

        System.out.println(q1 + " " + q2 + " " + q3);
    }
}