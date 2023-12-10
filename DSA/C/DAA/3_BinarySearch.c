#include<stdio.h>
int bs(int arr[],int low,int high,int key)
{
	if(low<=high)
	{
		int mid=(low+high)/2;
		if(arr[mid]==key)
		return mid;
		if(key<arr[mid])
	return	bs(arr,low,mid-1,key);
		else
	return	bs(arr,mid+1,high,key);
	}
	return -1;
}
int main()
{
	int arr[]={1,2,3,4,5,6,7};
	int key=8;
	int ans=bs(arr,0,6,key);
	printf("%d",ans);
}
