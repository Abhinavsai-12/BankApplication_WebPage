var balance = 5000;

document.getElementById("withdrawForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var withdrawAmount = parseInt(document.getElementById("withdrawAmount").value);
  
  if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
    document.getElementById("withdrawError").innerHTML = "Invalid withdrawal amount.";
    return;
  }
  
  if (withdrawAmount > balance) {
    document.getElementById("withdrawError").innerHTML = "Insufficient balance.";
    return;
  }
  
  balance -= withdrawAmount;
  document.getElementById("withdrawError").innerHTML = "Withdrawal successful!";
});

document.getElementById("depositForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var depositAmount = parseInt(document.getElementById("depositAmount").value);
  
  if (isNaN(depositAmount) || depositAmount <= 0) {
    document.getElementById("depositError").innerHTML = "Invalid deposit amount.";
    return;
  }
  
  balance += depositAmount;
  document.getElementById("depositError").innerHTML = "Deposit successful!";
});

document.getElementById("checkBalanceBtn").addEventListener("click", function() {
  document.getElementById("balanceResult").innerHTML = "Your balance is $" + balance;
});
