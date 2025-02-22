const quantity = [
    1,
    5,
    10,
    25,
    50,
    100
  ]
  
let currQty = quantity[0];

function cycle() {
    if (quantity.includes(currQty)) {
        const nextIndex = quantity.indexOf(currQty) + 1;
        if (nextIndex === quantity.length) {
            currQty = quantity[0];
        }
        else {
            currQty = quantity[nextIndex]
        }
    }
}

function add(val) {
    
}