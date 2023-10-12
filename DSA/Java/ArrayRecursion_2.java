package DSA;

import java.util.ArrayList;
import java.util.List;

public class ArrayRecursion_2 {
public static boolean isSorted(int arr[],int start,int end)
	
	{
		if(arr[start]>arr[end])
			return false;
		if(end==arr.length-1)
			return true;
		 
	 return isSorted(arr,start+1,end+1);
	 
	}
	public static boolean isSorted2(int arr[],int index)
	{
		if(index==arr.length-1)
			return true;
		
		return arr[index]<arr[index+1] &&isSorted2(arr,index+1);
	}
	public static int linearSearch(int arr[],int target,int index)
	{
		if(index==arr.length)
			return -1;
		if(arr[index]==target)
			return index;
	
		return linearSearch(arr, target, index+1);
	}

	public static List<Integer> linearSearchAdd(int arr[],int target,int index,ArrayList<Integer> al)
	{
		if(index==arr.length)
			return al;
		if(arr[index]==target)
			al.add(index);

		return linearSearchAdd(arr, target, index+1,al);
	}
	
	
	public static List<Integer> returnList(int arr[],int target,int index)
	{
		ArrayList<Integer> al=new ArrayList<>();
		if(index==arr.length)
			return al;
		if(arr[index]==target)
			al.add(index);
		
ArrayList<Integer>all=(ArrayList<Integer>) returnList(arr,target,index+1);
al.addAll(all);
return al;
			
	}
public static void main(String[] args) {
	int arr[]=new int []{1,2,3,4,1,2};
	
	System.out.println(isSorted(arr,0,1));
	System.out.println(isSorted2(arr,0));
	
	System.out.println(linearSearch(arr,6,0));
	ArrayList<Integer> al=new ArrayList<>(linearSearchAdd(arr,1,0,new ArrayList<>()));
	System.out.println(linearSearchAdd(arr,1,0,new ArrayList<>()));
	System.out.println(al);
	System.out.println(returnList(arr,1,0));
}
}
