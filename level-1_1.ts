const inputText = document.querySelector('#inputText') as HTMLInputElement;
const allButtons = document.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;
const output = document.querySelector('#output') as HTMLElement;

const capitalLettersArr: string[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
const vowelsArr: string[] = "AEIOUaeiou".split('');

const counterChar = (userText: string, buttonName: string) => {
    let counter: number = 0;
    const userTextArr: string[] = userText.split('');
    userTextArr.filter((letter) => {
        switch(true) {
            case (buttonName === 'capitalLetters'):
                if(capitalLettersArr.includes(letter)) {
                    counter++
                }
                break;
            case (buttonName === 'spaces'):
                if(letter === ' ') {
                    counter++;
                }
                break;
            case (buttonName === 'vowels'):
                if(vowelsArr.includes(letter)) {
                    counter++
                }    
        }
    });

    return counter;
}

allButtons.forEach((button) => {
    button.addEventListener('click', () => {
        switch(true) {
            case (button.textContent === 'Zähle Großbuchstaben'):
                output.innerHTML = `<p>${counterChar(inputText.value, 'capitalLetters')}</p>`;
                break;
            case (button.innerText === 'Zähle Leerzeichen'):
                output.innerHTML = `<p>${counterChar(inputText.value, 'spaces')}</p>`;
                break;
            case (button.innerText === 'Zähle Vokale'):
                output.innerHTML = `<p>${counterChar(inputText.value, 'vowels')}</p>`;
                break;
        }
    })
})