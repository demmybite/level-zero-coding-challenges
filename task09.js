'use-strict'

vowels = (word) => {
    let wordArray = word.toLowerCase().split(''); // convert word to lowercase splitting into an array 
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelsInWord = [];

    for (let i = 0; i < wordArray.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (vowels[j] == wordArray[i]) {
                vowelsInWord.push(wordArray[i]);
            }
        }
    }

    let uniqueVowelsInWord = removeDuplicates(vowelsInWord);
    console.log(`Vowels: ${uniqueVowelsInWord}`);
}

removeDuplicates = (vowelsArray) => { 
    let obj = {};
    let uniqueVowels = [];
    for (let i = 0; i < vowelsArray.length; i++) {
        obj[vowelsArray[i]] = true;
    }
    for (let key in obj) {
        uniqueVowels.push(key);
    }
    return uniqueVowels;
}





