
// export {};
/*
We need to tell TypeScript that our file 
is a module with its own scope. 
TypeScript considers any file with 
import or export statements as a module. 
 */

/* 
function scope(){
    let x = 12
    {x = 22}
    console.log(x)
}

scope() */


/* block scope with let and const */
{var x = 12;}

console.log(x)

const myArray = [1,2,3,4]

for(let i = 0; i < myArray.length; i++){
    const p = i;
    console.log(p)
}

const better = {

    "name": [
        {"test1": 1},
        {"test2": 2}
    ]
}

