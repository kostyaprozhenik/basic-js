const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(Direction = true) {
    this.reversDirection = !Direction;
  }
  encrypt(message, key) {
    let cipher= [];
    let alphabetArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    if(!message || !key) {
      throw new Error('Incorrect arguments!');
    };
    let messageUP = message.toUpperCase();
    let keyUP = key.toUpperCase();

    for (let i = 0, j = 0; i < messageUP.length; i++, j++) {
      if (alphabetArr.indexOf(messageUP[i]) < 0) {
        cipher[i] = messageUP[i];
        j--;
      } else {
        let numberMessage = alphabetArr.indexOf(messageUP[i]);
        let numberKey = alphabetArr.indexOf(keyUP[j % (keyUP.length)]);
        cipher[i] = alphabetArr[(numberMessage + numberKey) % 26];
      }
    }
    if (this.reversDirection) {
      return cipher.reverse().join('');
    } else {
      return cipher.join('');
    }
  }    
  decrypt(message, key) {
    let cipher= [];
    let alphabetArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    
    if(!message || !key) {
      throw new Error('Incorrect arguments!')
    };

    let messageUP = message.toUpperCase();
    let keyUP = key.toUpperCase();

    for (let i = 0, j = 0; i < messageUP.length; i++, j++) {
      if (alphabetArr.indexOf(messageUP[i]) < 0) {
        cipher[i] = messageUP[i];
        j--;
      } else {
        let numberMessage = alphabetArr.indexOf(messageUP[i]);
        let numberKey = alphabetArr.indexOf(keyUP[j % (keyUP.length)]);
        cipher[i] = alphabetArr[((numberMessage - numberKey) + 26) % 26];
      }
    }
    if (this.reversDirection) {
      return cipher.reverse().join('');
    } else {
      return cipher.join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
