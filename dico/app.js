const fs = require('fs');
const phoneticDictionary = fs.readFileSync('./src/Phonetics_Dictionary.txt').toString().split('\n').map(word=> word.split('\r')[0]);
const wordList = phoneticDictionary.map(word => word.split('_')[0]);
const wordPhonetics = phoneticDictionary.map(wordPhonetic => wordPhonetic.split('_')[1]);
const result = [];
const { PHONETIC_ALPHABET } = require('./src/PHONETIC_ALPHABET');

for (let i = 0; i < wordList.length; i++) {
    result.push({
        wordChars: wordList[i],
        wordPhonetic: wordPhonetics[i],
        stringToWorkWith: wordPhonetics[i],
        originalOrtho: []
    });
}

const findCorrespondance = () => {
    for (let i = 0; i < result.length; i++) {
        PHONETIC_ALPHABET.forEach(phonObj => {
            if (result[i].stringToWorkWith) {
                let foundPhonemIndex = result[i].stringToWorkWith.indexOf(phonObj.phonetic);
                if (foundPhonemIndex === 0) {
                    const foundedPhonem = phonObj.phonetic;
                    const correspondance = PHONETIC_ALPHABET.find(obj => obj.phonetic === foundedPhonem);
                    result[i].originalOrtho.push(correspondance.spellVal.toUpperCase());
                    result[i].stringToWorkWith = result[i].stringToWorkWith.replace(correspondance.phonetic, '');
                }
            }
        });
    };
}

for (let i = 0; i < 3; i++) {
    findCorrespondance()
};


const finalResult = result.filter(obj => obj.originalOrtho && obj.originalOrtho.length > 0 && !obj.stringToWorkWith);

for (let i = 0; i < finalResult.length; i++) {
    fs.appendFile('./src/words.txt', finalResult[i].wordChars + ' => ' + finalResult[i].originalOrtho.join('.') + '\n', (err) => {
        if (err) throw err;
    });
}