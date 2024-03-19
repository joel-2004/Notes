import java.util.ArrayList;
import java.util.Arrays;
import java.util.PriorityQueue;

public class Dijkrats {
    public static int[] shortestPath(ArrayList<ArrayList<int[]>> adj, int start) {
        int distance[] = new int[adj.size()];
        Arrays.fill(distance, Integer.MAX_VALUE);
        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[1] - b[1]);
        distance[start] = 0;
        pq.add(new int[] { start, distance[start] });

        while (!pq.isEmpty()) {
            int poll[] = pq.poll();
            int curr = poll[0];

            for (int row[] : adj.get(curr)) {
                int neighborV = row[0];
                int neighborW = row[1];

                if (distance[curr] + neighborW < distance[neighborV]) {
                    distance[neighborV] = distance[curr] + neighborW;
                    pq.add(new int[] { neighborV, distance[neighborV] });
                }
            }
        }

        return distance;
    }

    public static void main(String[] args) {
        ArrayList<ArrayList<int[]>> adj = new ArrayList<>();
        int n = 6;
        int start = 0;
        for (int i = 0; i < n; i++) {
            adj.add(new ArrayList<>());
        }

        adj.get(0).add(new int[] { 1, 5 });
        adj.get(0).add(new int[] { 2, 3 });
        adj.get(1).add(new int[] { 3, 6 });
        adj.get(1).add(new int[] { 2, 2 });
        adj.get(2).add(new int[] { 4, 4 });
        adj.get(2).add(new int[] { 5, 2 });
        adj.get(3).add(new int[] { 4, 6 });
        adj.get(3).add(new int[] { 5, 1 });
        adj.get(4).add(new int[] { 5, 4 });

        int distance[] = shortestPath(adj, start);
        System.out.println("Start: " + start);

        for (int i = 0; i < distance.length; i++) {
            System.out.println("Shortest Distance from " + start + " to i: " + distance[i]);
        }
    }
}