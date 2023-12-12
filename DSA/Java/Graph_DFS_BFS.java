import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Queue;



class Graph_DFS_BFS {
    public static ArrayList < ArrayList < Integer >> al = new ArrayList < > ();
    public static ArrayList < Integer > dfsAl = new ArrayList < > ();
    public static ArrayList < Integer > bfsAl = new ArrayList < > ();

    public static void addEdges(int source, int destination) {
        al.get(source).add(destination);
        al.get(destination).add(source);
    }

    public static void dfsUtil(int v, boolean visited[]) {
        visited[v] = true;
        dfsAl.add(v);
        for (int n: al.get(v)) {
            if (visited[n] == false)
                dfsUtil(n, visited);
        }
    }




    public static void dfs(int v) {
        boolean visited[] = new boolean[v];
        for (int i = 0; i < v; i++) {
            if (visited[i] == false)
                dfsUtil(i, visited);
        }

    }
    public static void bfs(int v) {
        Queue < Integer > q = new LinkedList < > ();
        boolean visited[] = new boolean[v];
        visited[0] = true;
        q.add(0);
        while (!q.isEmpty()) {
            int poll = q.poll();
            bfsAl.add(poll);
            for (int n: al.get(poll)) {
                if (visited[n] == false) {
                    visited[n] = true;
                    q.add(n);
                }
            }
        }

    }
    public static void main(String[] args) {

        int v = 5;
        for (int i = 0; i < v; i++) {
            al.add(new ArrayList < > ());
        }
        addEdges(0, 1);
        addEdges(0, 2);
        addEdges(0, 3);
        addEdges(1, 3);
        addEdges(2, 3);
        addEdges(2, 4);
        addEdges(3, 4);

        int i = 0;
        for (ArrayList < Integer > ans: al) {
            System.out.println("Source: " + (i++));
            System.out.print("Destinations:");
            for (int n: ans) {
                System.out.print(n + " ");
            }
            System.out.println();
        }
        System.out.println();
        System.out.println("DFS");
        dfs(v);
        System.out.println(dfsAl);

        System.out.println();
        System.out.println("BFS");
        bfs(v);
        System.out.println(bfsAl);
    }
}