var marks = [35,38,42,45,43,34,46,41,48,32];
var arr=[1,2,3,4,5,6];

function arr_square(arr){
for(var i = 0;i<arr.length;i++){
  arr[i]=arr[i]*arr[i]

}

return arr;



}



function setup() 
{
  createCanvas(400,400);
var result=arr_square(marks);
console.log(result);
}

function draw() 
{
  background(30);
}

 

