function createAccount(pin, amount = 0) {
  

  return {
    checkBalance(inputPin){
      if(inputPin !== pin) return "Invalid PIN."
      return `$${amount}` 
    },
    deposit(inputPin, inputAmount){
      if(inputPin !== pin) return "Invalid PIN."
      amount = amount + inputAmount
      return `Succesfully deposited $${inputAmount}. Current balance: $${amount}.`
    },
    withdraw(inputPin, inputAmount){
      if(inputPin !== pin) return "Invalid PIN."
      if(inputAmount > amount) return "Withdrawal amount exceeds account balance. Transaction cancelled."
      amount = amount - inputAmount
      return `Succesfully withdrew $${inputAmount}. Current balance: $${amount}.`
    },
    changePin(inputPin, newPin){
      if(inputPin !== pin) return "Invalid PIN."
      pin = newPin
      return "PIN successfully changed!"
    }
  }
}

module.exports = { createAccount };
