

// You are going to write three `static` methods in the `Formatter` class. Write
// your code in the `index.js` file. Let the tests guide you through the process.

// 1.  Write a method `static capitalize` that takes in a string and capitalizes the
//     first letter.
// 2.  Write a method `static sanitize` that takes in a string and removes all
//     non-alphanumeric characters except for dashes, single quotes and spaces.
// 3.  Write a method `static titleize` that takes in a string and capitalizes all
//     words in a sentence except the, a, an, but, of, and, for, at, by, and from; and
//     always capitalizes the first word.


class Formatter {
 
//capitalize a string 

  static capitalize(str){
  	return str.charAt(0).toUpperCase() + str.slice(1)
  }

//remove all chars except alphanumeric, space, dash, single quote 

  static sanitize(str){
  
  	return str.replace(/[^\w\s\-\']/gi, '')

  }


	static titleize(str){

  	let words = str.split(" ")
  	
    console.log(words)

  	let firstWord = this.capitalize(words[0])

    let restWords = words.slice(1)

 	console.log("These are all but first word")
  
  	console.log(restWords)

   	let constants = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
   	
   	for(var i = 0; i<restWords.length; i++){
       this.capitalize(restWords[i])
   		if(constants.indexOf(restWords[i]) === -1){
   				restWords[i] = this.capitalize(restWords[i])
   			}
   		}
           restWords.splice(0, 0, firstWord)
           let titleized = restWords.join(" ")
           return titleized
        }
    }




