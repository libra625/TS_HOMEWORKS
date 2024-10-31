const wordsInput: HTMLInputElement = document.createElement('input')
wordsInput.placeholder = 'Введіть текст...'
document.body.appendChild(wordsInput);

const badWordsInput: HTMLInputElement = document.createElement('input')
badWordsInput.placeholder = 'Введіть заборонені слова через кому'
document.body.appendChild(badWordsInput);

const btnToCensore: HTMLButtonElement = document.createElement('button')
btnToCensore.textContent = 'highlight'
document.body.appendChild(btnToCensore);

const censoredTextOutput: HTMLParagraphElement = document.createElement('p')
document.body.appendChild(censoredTextOutput);

const highlightForbiddenWords = function (text: string, forbiddenWords: string[]): string {
    let result: string = text
    forbiddenWords.forEach((word: string) => {
        const regex = new RegExp(`\\b${word}\\b`, 'gi')
        result = result.replace(regex, `<del>${word}</del>`)
    })
    return result
}

btnToCensore.addEventListener('click', () => {
    const forbiddenWords: string[] = badWordsInput.value.split(',').map(word => word.trim())
    censoredTextOutput.innerHTML = highlightForbiddenWords(wordsInput.value, forbiddenWords)
})
