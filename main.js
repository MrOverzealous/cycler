// list to cycle through
const min = 1;
const max = 'Max';
let currency = 5000;

const mines = {
    name: "Mines",
    count: 0,
    cost: 50
}

let quantity = [
    1,
    5,
    10,
    25,
    50,
    100,
    'Max'
];
  
function cycle() {
    let cycleVal = document.querySelector('#cycler').innerText;
    if (cycleVal === max) {
        document.querySelector('#cycler').innerText = quantity[0];
        return;
    }

    if (quantity.includes(parseInt(cycleVal))) {
        const nextIndex = quantity.indexOf(parseInt(cycleVal)) + 1;
        document.querySelector('#cycler').innerText = quantity[nextIndex];
    }
}

function add() {
    let valToAdd = document.querySelector('#customQuantity').value;
    // validate
    if (valToAdd === "") { // filter non-numbers
        console.log('Bad value: Not a number');
        return;
    }
    if (valToAdd < 1 || valToAdd > 9999) {
        console.log('Bad value: cannot be less than 1 or greater than 9999');
        return;
    }
    if (quantity.includes(valToAdd)) {
        console.log("value already present");
        return;
    }

    quantity.pop();
    quantity.push(valToAdd);
    quantity = quantity.toSorted((a, b) => a - b);
    quantity.push(max);

    document.querySelector('#customQuantity').value = ""; // clear input box

    updateScreen();
}

function remove() {
    // removes the value based on the current value of the cycler button, not the input field
    const valToRemove = document.querySelector('#cycler').innerText;
    const valToRemoveInt = parseInt(document.querySelector('#cycler').innerText);

    // prevent the user from being able to remove the first or last value
    if (quantity.indexOf(valToRemoveInt) === 0 || quantity.indexOf(valToRemove) === (quantity.length - 1)) {
        console.log('Cannot remove 1 or Max');
        return;
    }
    const qty = quantity.filter((val) => val !== valToRemove);
    cycle();
    quantity = qty;

    updateScreen();
}


function buy(item) {
    const buyQty = document.querySelector('#cycler').innerText;
    const totalCost = parseInt(buyQty) * item.cost;
    
    if (buyQty === max) {
        const qtyAffordable = Math.floor(currency / item.cost);
        item.count += qtyAffordable;
        currency -= qtyAffordable * item.cost;
    }
    else if (totalCost < currency) {
        item.count += parseInt(buyQty);
        currency -= totalCost;
    }
    else {
        // hand not enough currency, if necessary
    }
    updateScreen();
}


function updateScreen() {
    document.querySelector('#currency').innerText = `Currency: ${currency}`;
    document.querySelector('#quantity').innerText = quantity;
    document.querySelector('#mines').innerText = `${mines.name} Count: ${mines.count}`;
}

updateScreen();