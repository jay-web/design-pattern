// * In this pattern where we would simply define all of our functions and variables in the private scope 
// * and return an anonymous object with pointers to the private functionality we wished to reveal as public.


let welcome = (function (){

    let name;                       // ? Private variables
    let greet = "Welcome ";             // ? Private variables

    function greeting(){                // ? Private methods
        return `${greet} ${name}`
    }

    function publicGetName(){            // ? Private methods
        return greeting();
    }

    function publicSetName(newName){         // ? Private methods
        name = newName;
    }

    return {    
        greet: greeting,                // ? Public pointers to access methods
        setName: publicSetName,
        getName: publicGetName
    }
})();

welcome.setName("Jay Sharma");
console.log(welcome.getName());
console.log(welcome.greet());