// Code to be improved:

// const getNumberText = (num: number | undefined): string =>
//     ['One', 'Two', 'Three', 'Four', 'Five'][num ? num - 1 : 0 - 1] ?? 'Unknown';
  
//   const userInput: number = Math.ceil(Math.random() * 7);
//   console.log(userInput);
//   const numberText = getNumberText(userInput);
//   console.log(numberText);


// Improved Code:

const getNumberText = (num: number | undefined): string => {
    
    if( num === undefined || num < 1 || num > 5) {
        return 'Unknown';
    }

    const numberTexts = ['One', 'Two', 'Three', 'Four', 'Five'];
    return numberTexts[num - 1];
}

const userInput: number = Math.ceil(Math.random() * 7);
console.log(userInput);

const numberText = getNumberText(userInput);
console.log(numberText);
