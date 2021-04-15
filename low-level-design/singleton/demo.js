let  SingletonPattern = (function(){
    let instance;
   
     createInstance = () => {
        let object = new Object("Create instance");
        return object;
    }

    return {
        getInstance : function() {
        if(instance == null){
            instance = createInstance();
           
        }
        return instance;
    }
}
})();


let instance1 =    SingletonPattern.getInstance();
let instance2 =    SingletonPattern.getInstance();

console.log(instance1);

console.log("Are they same ", instance1 === instance2);