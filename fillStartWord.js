//const { template } = require('@babel/core')

function fillStartWord(startWord, word) {

if(word == null|| word == undefined){
  return undefined
}
else if(word.startsWith(startWord)){
  return word
}
  return startWord + word
}
console.log(fillStartWord("newton","newton is gay"));
//if(word === null && undefined){
//  console.log("undefined")



//module.exports = fillStartWord
