let letArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',''];
let salt = 3;
let string = "Cifra";

let stringSplit = string.toLowerCase().split('')

function encrypt(){
  let tempString = []
  stringSplit.map((item) => {
    let tempValue = letArray.indexOf(item);
    if(tempValue !== -1){
      let tempSalt = tempValue + salt
      tempString.push(letArray[tempSalt])
    }
  })
  return tempString.join('')
}


console.log(encrypt())