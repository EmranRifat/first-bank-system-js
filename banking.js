// handle deposit button

document.getElementById('deposit-btn').addEventListener('click', function () {

    // get the amount for deposit
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

    // update deposit total
    const depositOutput = document.getElementById('deposit-total');
    const previusDepositText = depositOutput.innerText;
    const previusDepositAmount = parseFloat(previusDepositText);

    const newDepositTotal = previusDepositAmount + newDepositAmount;
    depositOutput.innerText = newDepositTotal;

    // update account balence
    const blanceTotal = document.getElementById('balance-total');
    const blanceTotalText = blanceTotal.innerText;
    const previousBlanceTotal = parseFloat(blanceTotalText);
    const newBlanceTotal = previousBlanceTotal + newDepositAmount;
    blanceTotal.innerText = newBlanceTotal;



    depositInput.value = '';
});


// withdrow event handeler
document.getElementById('withdrow-btn').addEventListener('click', function () {
    const withDrawInput = document.getElementById('withdrow-input');
    const withdrawAmountText = withDrawInput.value;
    const newWithDrawAmount = parseFloat(withdrawAmountText);

    // set withdraw total
    const withdrawTotal = document.getElementById('withdrow-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawTotal + newWithDrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;


    // update blance 

    const balenceTotal = document.getElementById('balance-total');
    const previousBlanceText = balenceTotal.innerText;
    const previousBlanceTotal = parseFloat(previousBlanceText);
    const newBlanceTotal = previousBlanceTotal - newWithDrawAmount;
    balenceTotal.innerText = newBlanceTotal;

    // clear input
    withDrawInput.value = '';



})