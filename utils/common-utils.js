"use strict"
class StringGenerator {

    constructor() {
        this.allCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    }

    getRandomString(len) {
        let randomStr = ""
        for (let i = 0; i < len; i++) {
            const randomNum = Math.floor(Math.random() * this.allCharacters.length)
            randomStr += this.allCharacters[randomNum]
        }
        return randomStr
    }
}