public class Trie {
    // TreeNode obj
    static class TreeNode {
        TreeNode children[] = new TreeNode[26];
        boolean isLeaf;
    }

    // starting node
    static TreeNode root;

    // Insert
    public static void insert(String s) {
        TreeNode temp = root;
        for (int i = 0; i < s.length(); i++) {
            if (temp.children[s.charAt(i) - 'a'] == null) {
                temp.children[s.charAt(i) - 'a'] = new TreeNode();
            }
            temp = temp.children[s.charAt(i) - 'a'];

        }
        temp.isLeaf = true;
    }

    // Search
    public static boolean search(String s) {
        TreeNode temp = root;
        for (int i = 0; i < s.length(); i++) {
            if (temp.children[s.charAt(i) - 'a'] == null)
                return false;
            temp = temp.children[s.charAt(i) - 'a'];
        }

        return temp.isLeaf;
    }

    // Starts With
    public static boolean startsWith(String s) {
        TreeNode temp = root;
        for (int i = 0; i < s.length(); i++) {
            int c = s.charAt(i) - 'a';
            if (temp.children[c] == null)
                return false;

            temp = temp.children[c];
        }

        return true;
    }

    public static void main(String[] args) {
        String str[] = new String[] { "demo", "hello", "world", "new", "temp" };
        // The starting node
        root = new TreeNode();

        // Insert
        for (String s : str) {
            insert(s);
        }
        // Search
        System.out.println("Search");
        System.out.println();
        System.out.println(search("demo"));
        System.out.println(search("de"));
        System.out.println(search("news"));
        System.out.println(search("new"));

        // Starts With
        System.out.println();
        System.out.println("Starts With");
        System.out.println();
        System.out.println(startsWith("dem"));
        System.out.println(startsWith("a"));
        System.out.println(startsWith("new"));

    }
}
