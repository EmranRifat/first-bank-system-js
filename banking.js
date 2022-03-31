// handle deposit button

function getInputValue(inputId) {

    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const AmountValue = parseFloat(inputAmountText);


    // clear the input value
    inputField.value = '';
    return AmountValue;

}




document.getElementById('deposit-btn').addEventListener('click', function () {

    // get the amount for deposit
    // const depositInput = document.getElementById('deposit-input');
    // const newDepositAmountText = depositInput.value;
    // const newDepositAmount = parseFloat(newDepositAmountText);


    // // clear the input value
    // depositInput.value = '';

    // update deposit total
    // const depositOutput = document.getElementById('deposit-total');
    // const previusDepositText = depositOutput.innerText;
    // const previusDepositAmount = parseFloat(previusDepositText);

    // const newDepositTotal = previusDepositAmount + newDepositAmount;
    // depositOutput.innerText = newDepositTotal;

    // update account balence
    // const blanceTotal = document.getElementById('balance-total');
    // const blanceTotalText = blanceTotal.innerText;
    // const previousBlanceTotal = parseFloat(blanceTotalText);
    // blanceTotal.innerText = previousBlanceTotal + newDepositAmount;

    const newDepositAmount = getInputValue('deposit-input');
    if (newDepositAmount > 0) {
        updateTotalField('deposit-total', newDepositAmount);

        updateBalance(newDepositAmount, true);

    }




    // clear the input value
    depositInput.value = '';
});

function updateTotalField(totalFieldId, Amount) {
    const totalElement = document.getElementById(totalFieldId);
    const previusDepositTotal = totalElement.innerText;
    const previusDepositAmount = parseFloat(previusDepositTotal);

    totalElement.innerText = previusDepositAmount + Amount;

}

function getCurrentBlance() {
    const blanceTotal = document.getElementById('balance-total');
    const blanceTotalText = blanceTotal.innerText;
    const previousBlanceTotal = parseFloat(blanceTotalText);
    return previousBlanceTotal;
}


function updateBalance(newDepositAmount, isAdd) {
    const blanceTotal = document.getElementById('balance-total');
    // const blanceTotalText = blanceTotal.innerText;
    // const previousBlanceTotal = parseFloat(blanceTotalText);
    const previousBlanceTotal = getCurrentBlance();
    if (isAdd == true) {
        blanceTotal.innerText = previousBlanceTotal + newDepositAmount;

    }
    else {
        blanceTotal.innerText = previousBlanceTotal - newDepositAmount;

    }
}




// withdrow event handeler
document.getElementById('withdrow-btn').addEventListener('click', function () {
    // const withDrawInput = document.getElementById('withdrow-input');
    // const withdrawAmountText = withDrawInput.value;
    // const newWithDrawAmount = parseFloat(withdrawAmountText);


    // set withdraw total
    // const withdrawTotal = document.getElementById('withdrow-total');
    // const previousWithdrawText = withdrawTotal.innerText;
    // const previousWithdrawTotal = parseFloat(previousWithdrawText);
    // const newWithdrawTotal = previousWithdrawTotal + newWithDrawAmount;
    // withdrawTotal.innerText = newWithdrawTotal;

    // update blance after withdrow

    // const balenceTotal = document.getElementById('balance-total');
    // const previousBlanceText = balenceTotal.innerText;
    // const previousBlanceTotal = parseFloat(previousBlanceText);
    // balenceTotal.innerText = previousBlanceTotal - newWithDrawAmount;

    const newWithDrawAmount = getInputValue('withdrow-input');
    const currentBlance = getCurrentBlance();

    if (newWithDrawAmount > 0 && newWithDrawAmount < currentBlance) {
        updateTotalField('withdrow-total', newWithDrawAmount);
        updateBalance(newWithDrawAmount, false);
    }





});