<<<<<<< HEAD
#include<stdio.h>
#include<string.h>
int pal(char s[],int n)
{
	int l=0;
	int r=n-1;
	while(l<r)
	{
		if(s[l]!=s[r])
		return 0;
			l++;
			r--;
	}
	return 1;
}
int main()
{
	char s[]="joel";
	printf("%s",s);
	int n=strlen(s);
	int c=pal(s,n);
	if(c) printf("true");
	else printf("false");

}
=======
#include<stdio.h>
#include<string.h>
int pal(char s[],int n)
{
	int l=0;
	int r=n-1;
	while(l<r)
	{
		if(s[l]!=s[r])
		return 0;
			l++;
			r--;
	}
	return 1;
}
int main()
{
	char s[]="joel";
	printf("%s",s);
	int n=strlen(s);
	int c=pal(s,n);
	if(c) printf("true");
	else printf("false");

}
>>>>>>> 42a15ff59682403a4fea53e5355b02541d87fffb
