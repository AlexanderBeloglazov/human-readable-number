module.exports = function toReadable (number) {
 
    let num = number.toString();
  
    if (num.length === 1) {
  
    switch(number){
        case 0:
      return 'zero';
    case 1:
      return 'one';
    case 2:
      return 'two';
    case 3:
      return 'three';
     case 4:
      return 'four';
     case 5:
      return 'five';
     case 6:
      return 'six';
     case 7:
      return 'seven';
     case 8:
      return 'eight';
     case 9:
      return 'nine';
    }
  }
  
  else if (num.length === 2) {
    if (num[0] === '1') {
  
        switch(number){
            case 10:
          return 'ten';
        case 11:
          return 'eleven';
        case 12:
          return 'twelve';
        case 13:
          return 'thirteen';
         case 14:
          return 'fourteen';
         case 15:
          return 'fifteen';
         case 16:
          return 'sixteen';
         case 17:
          return 'seventeen';
         case 18:
          return 'eighteen';
         case 19:
          return 'nineteen';
        }
    }
    else if (num[0] !=='1' && num[1] === '0') {
        let tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        let firstWord = tens[+(num[0]) - 2];
        return firstWord;
    }
  
    else if (num[0] !=='1' && num[1] !== '0') {
        let tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        let firstWord = tens[+(num[0]) - 2];
        let ones = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        let secondWord = ones[+(num[1]) - 1];
        let allWords = firstWord + ' ' + secondWord;
        return allWords;
    }
  }
  
  else if (num.length === 3) {
  
    if (num[1] === '0' && num[2] === '0') {
    let hundreds = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
    let firstWordIn3 = hundreds[+(num[0]) - 1];
    return firstWordIn3;
    }
  
    else if (num[1] ==='0' && num[2] !== '0') {
        let hundreds = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
        let firstWordIn3 = hundreds[+(num[0]) - 1];
        let twoOnes = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        let thirdWordIn32 = twoOnes[+(num[2]) - 1];
        return firstWordIn3 + ' ' + thirdWordIn32;
    }
  
    else if (num[1] === '1') {
  
        let hundreds = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
        let firstWordIn3 = hundreds[+(num[0]) - 1];
        let tensIn3 =  ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        let secondWordIn3 = tensIn3[+(num[2])];
        return firstWordIn3 + ' ' + secondWordIn3;
    }
  
    else if (num[1] !=='1' && num[2] === '0') {
        let hundreds = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
        let firstWordIn3 = hundreds[+(num[0]) - 1];
        let twoTens0 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        let secondWordIn32 = twoTens0[+(num[1]) - 2];
        return firstWordIn3 + ' ' + secondWordIn32;
    }
  
    else if (num[1] !=='1' && num[1] !=='0') {
        let hundreds = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
        let firstWordIn3 = hundreds[+(num[0]) - 1];
        let twoTens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        let firstWordIn32 = twoTens[+(num[1]) - 2];
        let twoOnes = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        let thirdWordIn32 = twoOnes[+(num[2]) - 1];
        return firstWordIn3 + ' ' +  firstWordIn32 + ' ' + thirdWordIn32;
    }
  }
  }