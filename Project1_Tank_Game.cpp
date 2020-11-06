#include<bits/stdc++.h>
using namespace std;
void location(int *x,int *y)
{
  int a,b,f=0;
  while(f==0)
  {cin>>a>>b;
  	f=1;
  if(a>3||b>3||b<=0||a<1)
  {
    f=0;
    cout<<"Out of Bounds enter X and Y between 1 to 3\n";
  }
  }
  *x=a;
  *y=b;
}
void attack(int x,int y,int *hp)
{
	int l1,l2,a;
 cout<<"Enter Location to Attack\n";
 cin>>l1>>l2;
 if(l1!=x||l2!=y)
 {
 	cout<<"Enemy Not found\n";
 	system("pause");
 }
 else
 {
 	cout<<"Enemy found\n";
 	cout<<"Enter 1 for attack1\nEnter 2 for attack2\nEnter 3 for attack3\n";
    cin>>a;
    switch(a)
    {
    	case 1:
    	a=20;
    	*hp=*hp-a;
    	break;
    	case 2:
    	a=30;
    	*hp=*hp-a;
    	break;
    	case 3:
    	a=35;
    	*hp=*hp-a;
    	break;

    }
 }

}
void printloc1(int x, int y)
{
    int i,j;
	cout<<"Grid 1\n";
	cout<<"  1 2 3\n";
	for(i=0;i<3;i++)
	{   cout<<i+1<<" ";
		for(j=0;j<3;j++)
		{   
			if(i==x-1&&j==y-1)
				cout<<"@ ";
			else
			cout<<"* ";
		}
		cout<<"\n";
	}
	cout<<"\n ________\n\n\n";
	cout<<"  1 2 3\n";
	for(i=0;i<3;i++)
	{    cout<<i+1<<" ";
		for(j=0;j<3;j++)
		{
			cout<<"* ";
		}
		cout<<"\n";
	}
    cout<<"Grid 2\n";
}
void printloc2(int x, int y)
{
    int i,j;
	cout<<"Grid 1\n";
	cout<<"  1 2 3\n";
	for(i=0;i<3;i++)
	{   cout<<i+1<<" ";
		for(j=0;j<3;j++)
		{   
			
			cout<<"* ";
		}
		cout<<"\n";
	}
	cout<<"\n ________\n\n\n";
	cout<<"  1 2 3\n";
	for(i=0;i<3;i++)
	{    cout<<i+1<<" ";
		for(j=0;j<3;j++)
		{
			
			if(i==x-1&&j==y-1)
				cout<<"@ ";
			else
			cout<<"* ";
		}
		cout<<"\n";
	}
    cout<<"Grid 2\n";
}
void print()
{
	int i,j;
	cout<<"Grid 1\n";
	cout<<"  1 2 3\n";
	for(i=0;i<3;i++)
	{   cout<<i+1<<" ";
		for(j=0;j<3;j++)
		{
			cout<<"* ";
		}
		cout<<"\n";
	}
	cout<<"\n ________\n\n\n";
	cout<<"  1 2 3\n";
	for(i=0;i<3;i++)
	{    cout<<i+1<<" ";
		for(j=0;j<3;j++)
		{
			cout<<"* ";
		}
		cout<<"\n";
	}
    cout<<"Grid 2\n";
}
void game()
{
	int x1,y1,x2,y2,hp1=100,hp2=100,choice;
	char c;
        system("CLS");
        print();
		cout<<" Player 1 Enter Location in grid 1\n";
	    location(&x1,&y1);
	     system("CLS");
	     print();
	    cout<<"  Player 2 Enter Location in grid 2\n";
	    location(&x2,&y2);
	     system("CLS");
	    while(hp1>0&&hp2>0)
	    {
	    	
	    	cout<<"\t\t\t\tPlayer 1's Turn\thp"<<hp1<<"\n\n";
	    	printloc1(x1,y1);
            cout<<"Press m to move to a new location\nPress a to attack a location\n";
            cin>>c;
            switch(c)
            {
            	case 'm':
            	location(&x1,&y1);
            	system("CLS");
            	break;
            	case 'a':
                attack(x2,y2,&hp2);
                system("CLS");
                break;
                default:
                cout<<"Invalid Choice\n";
                break;

            }
            system("CLS");
            if(hp2<=0)
            	break;
            cout<<"\t\t\t\tPlayer 2's Turn\thp"<<hp2<<"\n\n";
            printloc2(x2,y2);
            cout<<"Press m to move to a new location\nPress a to attack a location\n";
            cin>>c;
            switch(c)
            {
            	case 'm':
            	location(&x2,&y2);
            	system("CLS");
            	break;
            	case 'a':
                attack(x1,y1,&hp1);
                system("CLS");
                break;
                default:
                cout<<"Invalid Choice\n";
                break;

            }
	    }
	    if(hp1>hp2)
	    	cout<<"\t\t\t\tPlayer 1 Won\n";
	    else
	    	cout<<"\t\t\t\tPlayer 2 Won\n";
	    system("pause");
	    system("CLS");
}
void rules()
{
	system("CLS");
	cout<<"1.	This is a two player game\n2.	Each player should enter location and play their chance in privacy\n3.	Each player has to predict location of the enemy and choose from three diffrent modes to attack enemy\n4.	Each player has 100 hp and after each attack if succesful player's hp will be displayed during the chance\n5.	Game will end whenever a player's life drops to zero\n";
	system("pause");
	system("CLS");
}
int main()
{
	int choice;
	
	while(1)
		 {
		cout<<"\t\t\t\t||||||||||||||||||||||||||||||||||||||||||||||||||||||\n";
	    cout<<"\t\t\t\t||||||||||||||||||||||||||||||||||||||||||||||||||||||\n";
	    cout<<"\t\t\t\t||||||||||||||||||||||||||||||||||||||||||||||||||||||\n";
		cout<<"\t\t\t\t||||||           |||| ||||||||| |\\\\   || ||| ||  //|||||||||||||||||\n";
		cout<<"\t\t\t\t||||||||||   |||||||   |||||||| ||\\\\  || ||| || // |||||||||||||||||\n";   
		cout<<"\t\t\t\t||||||||||   |||||=======|||||| || \\\\ || ||| || \\\\ |||||||||||||||||\n";
		cout<<"\t\t\t\t||||||||||   ||||         ||||| ||  \\\\|| ||| ||  \\\\|||||||||||||||||\n";
		cout<<"\t\t\t\t||||||||||||||||||||||||||||||||||||||||||||||||||||||\n";
		cout<<"\t\t\t\t||||||||||||||||||||||||||||||||||||||||||||||||||||||\n";
	    cout<<"\t\t\t\t||||||||||||||||||||||||||||||||||||||||||||||||||||||\n";
		cout<<"Enter 0 to end game\n\n";
		cout<<"Enter 1 to Play game\n";
		cin>>choice;
		rules();
		switch(choice)
		{
			case 1:
			game();
			break;
			case 0:
			exit(0);
			default:
			cout<<"Invalid choice\n";
			system("CLS");
			break;
		}
	}
	return 0;
}