let dictionarySavedWords = []

function saveWord() {
    let theSavedWord = document.getElementById("dictionary")
    dictionarySavedWords.push(theSavedWord.value)
    theSavedWord.value = ""
}

function searchWord() {
    let theSearchedWord = document.getElementById("dictionary")
    let dictionaryWords = document.getElementById("dictionaryWords")
    if (dictionarySavedWords.indexOf(theSearchedWord.value) != -1) {
        dictionaryWords.innerHTML = "cuvantul se gaseste in dictionar"
    } else {
        dictionaryWords.innerHTML = "cuvantul nu se gaseste in dictionar"
    }
    theSearchedWord.value = ""
}