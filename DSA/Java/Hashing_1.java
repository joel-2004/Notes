package DSA;

import java.util.HashMap;

public class Hashing_1 {
public static void main(String[] args) {
	String s="Hello i am joel";
	HashMap<Character,Integer> hm=new HashMap<>();
	for(char c:s.toCharArray())
	{
		hm.put(c,hm.getOrDefault(c, 0)+1); // if value is not present it puts 0 , else it puts 1
		
	}
	System.out.println(hm);
	for(char c:hm.keySet())
	{
		System.out.println(c+" "+hm.get(c));
	}
}
}
