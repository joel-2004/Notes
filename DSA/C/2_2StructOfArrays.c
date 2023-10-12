#include<stdio.h>
struct student{
	char s[100];
	int n;
	char c;
};
int main()
{
	struct student r[2]={{"joel",10,'M'
	},{"poopshu",6,'F'}
	};
	printf("%s %d %c\n",r[0].s,r[0].n,r[0].c);
	printf("%s %d %c",r[1].s,r[1].n,r[1].c);
}
