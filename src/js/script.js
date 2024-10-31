var wordsInput = document.createElement('input');
wordsInput.placeholder = 'Введіть текст...';
document.body.appendChild(wordsInput);
var badWordsInput = document.createElement('input');
badWordsInput.placeholder = 'Введіть заборонені слова через кому';
document.body.appendChild(badWordsInput);
var btnToCensore = document.createElement('button');
btnToCensore.textContent = 'highlight';
document.body.appendChild(btnToCensore);
var censoredTextOutput = document.createElement('p');
document.body.appendChild(censoredTextOutput);
var highlightForbiddenWords = function (text, forbiddenWords) {
    var result = text;
    forbiddenWords.forEach(function (word) {
        var regex = new RegExp("\\b".concat(word, "\\b"), 'gi');
        result = result.replace(regex, "<del>".concat(word, "</del>"));
    });
    return result;
};
btnToCensore.addEventListener('click', function () {
    var forbiddenWords = badWordsInput.value.split(',').map(function (word) { return word.trim(); });
    censoredTextOutput.innerHTML = highlightForbiddenWords(wordsInput.value, forbiddenWords);
});
