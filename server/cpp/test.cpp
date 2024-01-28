#include<bits/stdc++.h>
#include "testcase/serverTestcase.cpp"
#include "testcase/userTestcase.cpp"
#include "userfile/solution.cpp"
using namespace std;





class CorrectSolution{
   public:
   int sumOfArray(vector<int> &nums){
      int sum = 0;
      for(int el:nums) sum+=el;
      return sum; 
   }
};






int main(){

int correct = 1;
CorrectSolution obj1;
Solution obj2;

for(auto inputArray:userTestcase){
    int a = obj1.sumOfArray(inputArray);
    int b = obj2.sumOfArray(inputArray);
    cout<<a<<" "<<b<<endl;
    if(a!=b){
        correct = 0;
    }
}


cout<<correct;


}