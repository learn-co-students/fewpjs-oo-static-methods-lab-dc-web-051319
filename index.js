class Formatter {
  //add static methods here
  static capitalize(str) {
    return str.slice(0,1).toUpperCase() + str.slice(1)
  }

  static sanitize(str){
    return str.replace(/[^\w\s\"\`\'\-]/gi, '')
  }

  static titleize(str){
    let blackList = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let sentenceArr = str.split(' ').map((word, index) => {
      if (index === 0) {
        return Formatter.capitalize(word)
      } else if (blackList.includes(word) === false) {
        return Formatter.capitalize(word)
      } else {
        return word
      }
    })
    return sentenceArr.join(' ')
  }
}