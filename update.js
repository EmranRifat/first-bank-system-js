function getInput(inputId) {
    const input = document.getElementById(inputId);
    const inputText = input.value;
    const inputValue = parseFloat(inputText);

    input.value = '';
    return inputValue;

}

function updateTotal(updateId, amount) {
    const totalValue = document.getElementById(updateId);
    const previusValueText = totalValue.innerText;
    const previusAmount = parseFloat(previusValueText);
    const newTotal = previusAmount + amount;

    totalValue.innerText = newTotal;

}

function getTotalBalance(blanceId) {
    const totalBalancefield = document.getElementById(blanceId);
    const totalBalancefieldText = totalBalancefield.innerText;
    const totalBalance = parseFloat(totalBalancefieldText);
    return totalBalance;
}


function updateBalance(amount, isadding) {
    const blanceTotal = document.getElementById('balance-total');
    const blanceTotalText = blanceTotal.innerText;
    const previousBlanceTotal = parseFloat(blanceTotalText);

    let newBalance;
    if (isadding == true) {
        newBalance = previousBlanceTotal + amount;

    }
    else {
        newBalance = previousBlanceTotal - amount;

    }
    blanceTotal.innerText = newBalance;



}

document.getElementById('deposit-btn').addEventListener('click', function () {

    const amount = getInput('deposit-input');

    if (amount > 0) {
        updateTotal('deposit-total', amount);
        updateBalance(amount, true);
    }


});


document.getElementById('withdrow-btn').addEventListener('click', function () {

    const amount = getInput('withdrow-input');
    const balance = getTotalBalance('balance-total');


    if (amount > 0 && amount <= balance) {
        updateTotal('withdrow-total', amount);
        updateBalance(amount, false);


    }




})