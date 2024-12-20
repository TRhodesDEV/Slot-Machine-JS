// 1. Deposit money
// 2. Determine number of lines bet on
// 3. Collect bet amount
// 4. Spin slot machine
// 5. Check if user wins
// 6. Give users winnings
// 7. Play again

const prompt = require("prompt-sync")()

const deposit = () => {
    while(true) {
        const depositAmount = prompt("Enter a deposit amount: ")
        const numberDepAmount = parseFloat(depositAmount)

        if(isNaN(numberDepAmount) || numberDepAmount <= 0) {
            console.log("Invalid deposit amount. Try again")
        } else {
            return numberDepAmount
        }
    }    
}

const getNumberOfLines = () => {
    while(true) {
        const lines = prompt("Enter number of lines to bet on (1-3): ")
        const numberOfLines = parseFloat(lines)

        if(isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("Invalid number of lines. Try again")
        } else {
            return numberOfLines
        }
    }    
}

const getBet = (balance) => {

}

let balance = deposit()
const numberOfLines = getNumberOfLines()

