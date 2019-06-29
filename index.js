class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }
  static titleize(string) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let titleized = []
    string.split(' ').map((word) => {
      if (exceptions.includes(word) && titleized.length !== 0) {
        titleized.push(word)
      } else {
        titleized.push(word[0].toUpperCase()+word.substr(1).toLowerCase())
      }
    })
    return titleized.join(' ')
  }
}

var test = Formatter.titleize("a this is a test")

console.log(test)