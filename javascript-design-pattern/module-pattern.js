// * Module patter gives us encapsulation and abstraction of the OOP
// * Since class dosen't have private variable or method creation in JS
// * So we will use IIFE and JS closure to create privatization


let basketModule = (function(){
    let basket = [];            // ? Private variable

    let discount = function(item){      // ? Private method
        if(item.count == 2){
            item.price = item.price - (item.price / 10);
            return item;
        }else{
            return item;
        }
    }

    return {
        getItems: function(){
            basket.forEach((item, idx) => {
                console.log(`${idx + 1} - ${item.item}`);
            });
        },
        addItem: function(values){
            basket.push(discount(values));
        },
        getNumberOfItems: function(){
            return basket.length;
        },
        getTotal: function(){
            let q = this.getNumberOfItems() - 1;
            let p = 0;
            while(q >= 0){
                p += basket[q].price;
                q--;
            }
            return `Total Bill is ${p}`;
        }
    }
})();

basketModule.addItem({ item: "Bread", price: 20, count: 1});
basketModule.addItem({ item: "Milk", price: 110, count: 2});

let items = basketModule.getNumberOfItems();
console.log(`Total item are ${items}`);
basketModule.getItems();

let bill = basketModule.getTotal();
console.log(bill);
