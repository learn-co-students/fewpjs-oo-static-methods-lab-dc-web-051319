class Formatter {
  static capitalize(string) {
    let newString = string[0].toUpperCase() + string.slice(1)
    return newString
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'' ']+/g, '')
  }

  static titleize(string) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let stringArray = string.split(' ')
    let firstWord = stringArray[0]
    let capitalizedFirstWord = firstWord[0].toUpperCase() + firstWord.slice(1)
    let followingWords = stringArray.slice(1)

    let newStringArray = []
    followingWords.forEach (word => {
      if (exceptions.includes(word)) {
        newStringArray.push(word)
      } else {
        let capitalizedWord = word[0].toUpperCase() + word.slice(1)
        newStringArray.push(capitalizedWord)
      }
    })
    return capitalizedFirstWord + ' ' + newStringArray.join(' ')
  }
}

Formatter.capitalize('jenny')
Formatter.titleize('a tale of two cities')