// withdraw handel code
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawInputField = document.getElementById('withdraw-input-field');
    const currentWithdrawString = withdrawInputField.value;
    // console.log(typeof currentDepositString);
    const currentWithdrawAmount = parseFloat(currentWithdrawString);
    // console.log(typeof currentDepositAmount);

    withdrawInputField.value = '';

    if(isNaN(currentWithdrawAmount)){
        alert ('this is not a number ok')
        return;
    }
    const previousWithdraw = document.getElementById('previous-withdraw');
    const previousWithdrawString = previousWithdraw.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawString);
    // console.log(previousWithdrawAmount); 
    
    const previousBalance = document.getElementById('previous-balance');
    const previousBalanceString = previousBalance.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceString);

    if(previousBalanceAmount < currentWithdrawAmount){
        alert ('Tomar bap ar bank a ato taka nai.')
        return;
     }

    const totalWithdraw = previousWithdrawAmount + currentWithdrawAmount;
    previousWithdraw.innerText = totalWithdraw;
    // console.log(totalWithdraw);

    // console.log(previousBalanceAmount);
    const totalBalance = previousBalanceAmount - currentWithdrawAmount;
    previousBalance.innerText = totalBalance;
    
})
