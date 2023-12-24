package dsa;

public class Trie {
static class TreeNode{
	TreeNode children[]=new TreeNode[26];
	boolean isLeaf;
}

static TreeNode root;

public static void insert(String s)
{
	int len=s.length();
	TreeNode curr=root;
	for(int i=0;i<len;i++)
	{
		if(curr.children[s.charAt(i)-'a']==null)
		{
			curr.children[s.charAt(i)-'a']=new TreeNode();
		}
		curr=curr.children[s.charAt(i)-'a'];//to move to the next pointer
	}
	curr.isLeaf=true;
}

public static boolean search(String s)
{
	int len=s.length();
	TreeNode curr=root;
	for(int i=0;i<len;i++)
	{
		if(curr.children[s.charAt(i)-'a']==null)
		{
			return false;
		}
		curr=curr.children[s.charAt(i)-'a'];
	}
	return(curr.isLeaf==true);
}

public static void main(String[] args) {
	String s1[]= {"the", "a", "there", "answer", "any",
            "by", "bye", "their"};
	root=new TreeNode();
	for(String s:s1)
	{
		insert(s);
	}
	System.out.println(search("these"));
}
}
