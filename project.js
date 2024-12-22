// 1. Deposit money
// 2. Determine number of lines bet on
// 3. Collect bet amount
// 4. Spin slot machine
// 5. Check if user wins
// 6. Give users winnings
// 7. Play again 

const prompt = require("prompt-sync")()

const ROWS = 3
const COLS = 3

const SYMBOLS_COUNT = {
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8
}

const SYMBOL_VALUES = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
}


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

const getBet = (balance, lines) => {
    while(true) {
        const bet = prompt("Enter the total bet per line: ")
        const numberBet = parseFloat(bet)

        if(isNaN(numberOfLines) || numberBet <= 0 || numberBet > balance / lines) {
            console.log("Invalid bet. Try again")
        } else {
            return numberBet
        }
    }
}

const spin = () => {
    const symbols = []
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
        console.log(symbol, count)
    }

}


let balance = deposit()
const numberOfLines = getNumberOfLines()
const bet = getBet(balance, numberOfLines)

