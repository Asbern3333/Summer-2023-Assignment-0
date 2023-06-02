function f(arr)
{
    var x=0;
    var i=0;
    while(arr.length>=x)
    {
        
        if(arr[x]==false||arr[x]==true)
        {
          i++  
        }
        
        x++;
    }
    console.log(i);
}
var ar=new Array("123","123"," sadsad",false,true,12432,10,2,3,5,1,34,123,1232142);
f(ar);
