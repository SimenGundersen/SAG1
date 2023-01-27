function randomLetter() {
    // Draw a random number between 0 and 28
    let number = Math.floor(Math.random() * 29);

    // Check if the number is 28, 27 or 26
    if (number === 28) {
        return 'å';
    } else if (number === 27) {
        return 'ø';
    } else if (number === 26) {
        return 'æ';
    } else {
        // Convert the number to a letter by adding the char code for 'A'
        let letter = String.fromCharCode(number + 'A'.charCodeAt(0));
        return letter;
    }
}



function randomWord() {
    let word = "";
    for (let i = 0; i < 5; i++) {
        word += randomLetter();
    }
    return word;
}


function randomConsonant() {
    let consonants = "bcdfghjklmnpqrstvwxyz";
    let number = Math.floor(Math.random() * 21);
    let consonant = consonants[number];
    return consonant;
}

function randomVowel() {
    let vowels = "aeiouyæøå";
    let number = Math.floor(Math.random() * 8);
    let vowel = vowels[number];
    return vowel;
}

function randomWordCVCCV() {
    let word = randomConsonant() + randomVowel() + randomConsonant() + randomVowel() + randomConsonant();
    return word;
}