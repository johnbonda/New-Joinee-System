// var foo = (x:number) => {
//     x = 10 + x;
//     console.log(x);
// }

// foo(100);

// var testing: any = (x:number) => {
//     x = 11 + x;
//     console.log(x)
// }

// testing(101);

// var doSomething = (y:number) => (x:number) => y*y*x
// console.log(doSomething(5)(10));

var getOneTimeFunction = () => {
    var count:number = 0;
    return () => {
        count ++ ;
        console.log((count==1)?"Calling first time": "Calling " + count + " time.");
    }
}

var single = getOneTimeFunction();

single();
single();