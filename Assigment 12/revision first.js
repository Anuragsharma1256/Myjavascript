 // Problem var 
 //If users use the var variable before the declaration, it initializes with the undefined value. The output is shown in the console.


    console.log(a);
    var a = 10;




    // Problem let
    // The code returns an error because we are accessing the let variable outside the function block. The output is shown in the console.


    let a = 10;
    function f() {
        if (true) {
            let b = 9
 
            // It prints 9
            console.log(b);
        }
 
        // It gives error as it
        // defined in if block
        console.log(b);
    }
    f()
 
    // It prints 10
    console.log(a)




// Problem 3
//Users cannot change the properties of the const object, but they can change the value of the properties of the const object.


    const a = {
        prop1: 10,
        prop2: 9
    }
     
    // It is allowed
    a.prop1 = 3
 
    // It is not allowed
    a = {
        b: 10,
        prop2: 9
    }