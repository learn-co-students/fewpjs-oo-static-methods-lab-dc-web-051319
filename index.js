class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }

  static titleize(string){
    let cappedTitleArray = []
    let titleArray = string.split(" ");
    for (let i = 0; i < titleArray.length; i++){
      if ((titleArray[i] === "the" ||
      titleArray[i] === "a" ||
      titleArray[i] === "an" ||
      titleArray[i] === "but" ||
      titleArray[i] === "of" ||
      titleArray[i] === "and" ||
      titleArray[i] === "for" ||
      titleArray[i] === "at" ||
      titleArray[i] === "by" ||
      titleArray[i] === "from"
    )
       && titleArray.indexOf(titleArray[i]) !== 0) {
        cappedTitleArray.push(titleArray[i])
      } else {
        cappedTitleArray.push(titleArray[i].charAt(0).toUpperCase() + titleArray[i].slice(1))
        }
    }
    return cappedTitleArray.join(" ")
  }
}

//the, a, an, but, of, and, for, at, by, and from








//
