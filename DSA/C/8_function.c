<<<<<<< HEAD
#include<stdio.h>
//if a function calls itself it is called as recursive function
int fun1(int n)
{
	if(n>0){
	printf("%d ",n);
	fun1(n-1);// op:- 3 2 1
	
}
	/*Use tree trace to find output in function
	                    fun(3)
	                     / \
	                    3   fun(2)
	                         / \
	                        2   fun(1) 
	                             / \
	                            1   fun(0) //because of if statement
	                                 \
	                                  exit fun()
	*/
}
int fun2(int n)
{
	if(n>0){
		fun2(n-1);
	printf("%d ",n);
}
	/*Use tree trace to find output in function
	
	First the 3 functions will execute,
	then only the numbers will be printed from bottom.
	                    fun(3)
	                     / \
	                 fun(2)  3
	                   /     \ 
	                fun(1)    2 
	                /         \  
	            fun(0)         1    
	             /                    
	            exit                     
	*/
	// op:- 1 2 3
}

int main()
{
	int x=3;
	fun1(3);
	printf("\n");
	fun2(3);
}
//Memory Allocations
//when memory is allocated before or during compilation(functio()) then it is static memory allocation.
/*when memory is allocated during runtime,it is dynamic memory allocation(using pointer).
Programs cannot access heap memory directly,it uses pointer to access it
*/

=======
#include<stdio.h>
//if a function calls itself it is called as recursive function
int fun1(int n)
{
	if(n>0){
	printf("%d ",n);
	fun1(n-1);// op:- 3 2 1
	
}
	/*Use tree trace to find output in function
	                    fun(3)
	                     / \
	                    3   fun(2)
	                         / \
	                        2   fun(1) 
	                             / \
	                            1   fun(0) //because of if statement
	                                 \
	                                  exit fun()
	*/
}
int fun2(int n)
{
	if(n>0){
		fun2(n-1);
	printf("%d ",n);
}
	/*Use tree trace to find output in function
	
	First the 3 functions will execute,
	then only the numbers will be printed from bottom.
	                    fun(3)
	                     / \
	                 fun(2)  3
	                   /     \ 
	                fun(1)    2 
	                /         \  
	            fun(0)         1    
	             /                    
	            exit                     
	*/
	// op:- 1 2 3
}

int main()
{
	int x=3;
	fun1(3);
	printf("\n");
	fun2(3);
}
//Memory Allocations
//when memory is allocated before or during compilation(functio()) then it is static memory allocation.
/*when memory is allocated during runtime,it is dynamic memory allocation(using pointer).
Programs cannot access heap memory directly,it uses pointer to access it
*/

>>>>>>> 42a15ff59682403a4fea53e5355b02541d87fffb
