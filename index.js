class Formatter {
  static capitalize(string){
     return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(str){
    str = str.replace(/[^A-Za-z0-9 '-]/g, '' );
    return str;
  }

  static titleize(string){
    let newArray = []
    let badWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let nuArray = string.split(' ')
    for (let i = 0; i < nuArray.length; i++){

      if (i == 0) {
        newArray.push(this.capitalize(nuArray[i]))
      }else{
      if (badWords.includes(nuArray[i])){ 
         
          newArray.push(nuArray[i])
         
      } 
      else {
         newArray.push(this.capitalize(nuArray[i]))
        
      }
      }
    }
      return newArray.join(" ")
      
    }
      
  }
