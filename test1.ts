function factorial(num : number) :number{
   return (num == 0 || num == 1) ?  1:  num * factorial(num-1);
}

console.log(factorial(5));


type fact=(x:number)=> void;
function callbackFactorial(num :number ,callback :fact) : void{

       if (num == 0 || num == 1){
        callback(1);
       }
       else
       {
        let res=1;
       for(let i = 2; i<=num; i++){
        res*=i;
       }
       callback(res);

       }
}

callbackFactorial(4,(x : number)=>{
    console.log(x);
    
});

interface Newdata
{   userId: number; 
    id: number; 
    title: string;
    body: string 
}

async function fetchData(url:string) : Promise<void> {
    try {
        const response = await fetch(url);
        console.log(response.status);
        
        const data=await response.json();
       ( data as Newdata[]).map((x) => console.log(x.id));
     
    } catch (error) {
        
    }
}

const url = 'https://jsonplaceholder.typicode.com/posts';
fetchData(url);