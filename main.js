// list to cycle through
let quantity = [
    1,
    5,
    10,
    25,
    50,
    100
];
  

function cycle() {
    const currQty = parseInt(document.querySelector('#cycler').innerText);
    if (quantity.includes(currQty)) {
        const nextIndex = quantity.indexOf(currQty) + 1;
        if (nextIndex === quantity.length) {
            document.querySelector('#cycler').innerText = quantity[0];
        }
        else {
            document.querySelector('#cycler').innerText = quantity[nextIndex];
        }
    }
}

function add() {
    let val = document.querySelector('#customQuantity').value;

    if (parseInt(val) > 0 ) {
        val = parseInt(val);
    }
    else {
        console.log('bad value, cannot add')
        return;
    }

    if (quantity.includes(val)) {
        console.log("value already present");
        return;
    }
    else {
        quantity.push(val);
        quantity = quantity.toSorted((a, b) => a - b);

        document.querySelector('#quantity').innerHTML = quantity;
        document.querySelector('#customQuantity').value = "";
    }
}

function remove() {
    // removes the value based on the current value of the cycler button, not the input field
    
    const valToRemove = parseInt(document.querySelector('#cycler').innerText);
    const qty = quantity.filter((val) => val !== valToRemove);
    cycle()
    quantity = qty;
    document.querySelector('#quantity').innerHTML = quantity;
}

document.querySelector('#quantity').innerText = quantity;
// document.querySelector('#customQuantity').addEventListener('')