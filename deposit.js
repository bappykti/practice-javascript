// deposit handel code
document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositInputField = document.getElementById('deposit-input-field');
    const currentDepositString = depositInputField.value;
    // console.log(typeof currentDepositString);
    const currentDepositAmount = parseFloat(currentDepositString);
    // console.log(typeof currentDepositAmount);

    depositInputField.value = '';

    if(isNaN(currentDepositAmount)){
        alert ('This is not a number');
        return;
    }
    
    const previousDeposit = document.getElementById('previous-deposit');
    const previousDepositString = previousDeposit.innerText;
    const previousDepositAmount = parseFloat(previousDepositString);
    // console.log(previousDepositAmount); 
    const totalDeposit = currentDepositAmount + previousDepositAmount;
    previousDeposit.innerText = totalDeposit;
    // console.log(totalDeposit);
  

    const previousBalance = document.getElementById('previous-balance');
    const previousBalanceString = previousBalance.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceString);
    // console.log(previousBalanceAmount);
    const totalBalance = previousBalanceAmount + currentDepositAmount;
    previousBalance.innerText = totalBalance;
})