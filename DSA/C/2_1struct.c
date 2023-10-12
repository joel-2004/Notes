#include<stdio.h>
#include<string.h>
struct student{
char s[100];
int n;
char c;
};
int main()
{
	struct student r={"joel",10,'M'
	};
	struct student r1;
	memcpy(r1.s,"poopshu",7);
	r1.n=06;
	r1.c='F';

	
	printf("%s %d %c\n ",r.s,r.n,r.c);
		printf("%s %d %c\n",r1.s,r1.n,r1.c);
		
		char str1[20]="meoly";
		char str2[20];
		memcpy(str2,str1,sizeof(str1));
		printf("%s %s",str1,str2);
}
