let singletonTester = (function(){

    function SingleTon(options){

        options = options || {};

        this.name = "Singleton",
        this.pointX = options.pointX || 6;
        this.pointY = options.pointY || 10;

    }

    let instance;       // * To hold instance

    let _static = {
        name: "SingletonTester",
        getInstance: function(options){
            if(!instance){
                instance = new SingleTon(options)
            }
            return instance;
        }
    }

    return _static;
}) ();

let singletonA = singletonTester.getInstance({
    pointX: 5
});

console.log(singletonA.pointX);