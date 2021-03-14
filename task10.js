'use-strict'

commonCharacters = (str1,str2) => {
    str1Array = str1.split('');
    str2Array = str2.split('');
    let commonLetters = [];

    for (let i = 0; i < str2Array.length; i++) {
        for (let j = 0; j < str1Array.length; j++) {
            if (str1Array[j] == str2Array[i]) {
                commonLetters.push(str2Array[i]);
            }
        }
    }
    console.log(`Common letters: ${commonLetters}`);
}


