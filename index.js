class Formatter {
  //add static methods here
static capitalize(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}
static sanitize(string){
  return string.replace(/[^A-Za-z0-9- ']/g, '');
}
static titleize(string){
  //spilt the sentence into and area
  //go through each entry in the array and capitalize each letter
  //have an if statment that if a word is any of the one listed ignore it
  let capString = Formatter.capitalize(string)
    let excludedWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let stringArray = capString.split(" ")
    return stringArray.map(string => {
      if (excludedWords.includes(string)) {
        return string
      } else {
        return string.charAt(0).toUpperCase() + string.slice(1)
      }
    }).join(" ")

}


}
