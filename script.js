document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);


    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousAmount = parseFloat(depositTotalText);
    depositTotal.innerText = previousAmount + depositAmount;

    depositInput.value = '';

    // update blance 
    const blanceTotal = document.getElementById('balance-total');
    const blanceTotalText = blanceTotal.innerText;
    const previousBalanceTotal = parseFloat(blanceTotalText);
    blanceTotal.innerText = depositAmount + previousBalanceTotal;




});


// Handle withdrow button
document.getElementById('withdrow-btn').addEventListener('click', function () {
    const withdrowInput = document.getElementById('withdrow-input');
    const withdrawInputText = withdrowInput.value;
    const withDrawInputAmount = parseFloat(withdrawInputText);

    // update withdrow
    const withdrawTotal = document.getElementById('withdrow-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawTotalAmount = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = withdrawTotalAmount + withDrawInputAmount;



    // update blance after withdrow
    const blanceTotal = document.getElementById("balance-total");
    const preBlanceTotalText = blanceTotal.innerText;
    const previousBlance = parseFloat(preBlanceTotalText);
    blanceTotal.innerText = previousBlance - withdrawTotalAmount;



    withdrowInput.value = '';



});