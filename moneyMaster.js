// console.log('it is money master js file');

function getIncomeInputFieldAmount(inputFieldId){
    const incomeInputField = document.getElementById(inputFieldId);
    const incomeInputFieldValueString = incomeInputField.value;
    const incomeInputFieldValueAmount = parseFloat(incomeInputFieldValueString);
    return incomeInputFieldValueAmount;
}
function getExpensesInputFieldAmount(inputFieldId){
    const expensesInputField = document.getElementById(inputFieldId);
    const expensesInputFieldValueString = expensesInputField.value;
    const expensesInputFieldValueAmount = parseFloat(expensesInputFieldValueString);
    expensesInputField.value = "";
    return expensesInputFieldValueAmount;
}
document.getElementById('calculate').addEventListener('click', function(){
    const incomeAmount = getIncomeInputFieldAmount('income');
    if(isNaN(incomeAmount)){
      alert ('Put your valid income first.');
      return;
    }

    // console.log(incomeAmount);
    const expenseArea1 = getExpensesInputFieldAmount('food');
    const expenseArea2 = getExpensesInputFieldAmount('rent');
    const expenseArea3 = getExpensesInputFieldAmount('clothes');
    if(isNaN(expenseArea1) || isNaN(expenseArea2) || isNaN(expenseArea3)){
      alert ('Put a valid area of expense amount. == "FOOD" "RENT" "CLOTHES"');
      return;
    }
    else if(incomeAmount < expenseArea1 || incomeAmount < expenseArea2 || incomeAmount < expenseArea3 ){
        alert ("Put your expenses carefully.");
        return;
    }

    const totalAreaExpenseAmount = expenseArea1 + expenseArea2 + expenseArea3;
    //   console.log(totalAreaExpenseAmount);
    if(incomeAmount < totalAreaExpenseAmount){
        alert ('You should reduce your area of expenses.');
        return;
    }

    const previousExpenseInnerText = document.getElementById('total-expense-inner-text');
    const previousExpenseInnerTextString = previousExpenseInnerText.innerText;
    const previousExpenseInnerTextAmount = parseFloat(previousExpenseInnerTextString);
    // console.log(previousExpenseInnerTextAmount);
    // console.log(typeof previousExpenseInnerTextAmount);
    const totalExpenses = previousExpenseInnerTextAmount + totalAreaExpenseAmount;
    // console.log(totalExpenses);
    previousExpenseInnerText.innerText = totalExpenses;
    // console.log(totalExpenses);

    const previousBalanceInnerText = document.getElementById('total-balance-inner-text');
    const previousBalanceInnerTextString = previousBalanceInnerText.innerText;
    const previousBalanceInnerTextAmount = parseFloat(previousBalanceInnerTextString);
    // console.log(previousBalanceInnerTextAmount);
    // console.log(typeof previousBalanceInnerTextAmount);
    const totalBalanceAfterExpenses = incomeAmount - totalExpenses;

    // console.log(remainingBalance);
    // console.log(typeof remainingBalance);
    previousBalanceInnerText.innerText = totalBalanceAfterExpenses;

    const difference = incomeAmount - totalAreaExpenseAmount;
    // console.log(typeof difference);
    // console.log(difference);
    
    document.getElementById('btn-save').addEventListener('click', function(){
    // console.log('i am clicked btn-save');
    const savingPercentage = getIncomeInputFieldAmount('save');

    if(totalBalanceAfterExpenses <= 0){
    previousBalanceInnerText.innerText = "Income and Expenses are Equal.";
    return;
    }
    // console.log(savingPercentage);
    const savingAmount = Math.round(savingPercentage/100 * incomeAmount);                                                                       
    if(savingAmount > difference){
        alert ("How could you save more than your balance after expenses.");
        return;
    }
    else if(savingPercentage <= 0){
        alert ('Actually you can not save 0 percent or less than that.')
        return;
    }
    else if(isNaN(savingAmount)){
        alert ('Enter a valid number.');
        return;
    }
    // console.log(savingAmount);
    // console.log(typeof savingAmount);
    const previousSavingAmount = document.getElementById('saving-amount');
    const previousSavingAmountString = previousSavingAmount.innerText;
    const previousSavingAmountValue = parseFloat(previousSavingAmountString);
    // console.log(previousSavingAmountValue);
    // console.log(typeof previousSavingAmountValue);
    previousSavingAmount.innerText = savingAmount;
    
    const previousRemainingBalanceAfterSaving = document.getElementById('remaining-balance');
    const previousRemainingBalanceAfterSavingString = previousRemainingBalanceAfterSaving.innerText;
    const previousRemainingBalanceAfterSavingAmount = parseFloat(previousRemainingBalanceAfterSavingString);
    // console.log(remainingBalanceAfterSavingAmount);
    // console.log(typeof remainingBalanceAfterSavingAmount);
    const currentRemainingBalanceAfterSaving = difference - savingAmount;
    previousRemainingBalanceAfterSaving.innerText = currentRemainingBalanceAfterSaving;
})
})
