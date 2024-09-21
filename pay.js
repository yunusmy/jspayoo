//  add money to the account

document.getElementById('btn-addmoney').addEventListener('click', function (event) {
  event.preventDefault(); 
  // console.log('money add butn clicked')


  const addMoneyInput = document.getElementById('input-add-money').value;

  const pinNumberInput = document.getElementById('pin-number').value;

  // console.log(addMoneyInput, pinNumberInput)


  if (pinNumberInput === '1234') {
    // console.log('adding money to Your account')
    const balance = document.getElementById('account-balance').innerText;
    // console.log(balance)
    
    const addMoneyNumber = parseFloat( addMoneyInput);
    const balanceNumber = parseFloat(balance);
    const newbalanes = addMoneyNumber + balanceNumber;
    // console.log(newbalanes)


    document.getElementById('account-balance').innerText = newbalanes;
  } else {
  console.log('  invalid Number')
  }
}) 