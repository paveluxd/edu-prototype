//UTILITY
//Shuffle array
function shuffleArr(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

//Remove item from array
function removeFromArr(arr, index){
    arr = arr.filter(item => item !== index)

    return arr
}

//Generate random number
function rng(maxValue, minValue){
    if(minValue == undefined){
        minValue = 0
    }

    let rNum = Math.floor(Math.random() * maxValue + minValue)
    return rNum
}

//Get random object key
function getRandomObjKey(parentKey){ //parentKey = obj["valueShard"]
    let rNum = rng(Object.keys(parentKey).length)
    let randomKey = Object.keys(parentKey)[rNum]
    return randomKey
}

//Get obj key by obj value
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

// Hide page
// function hide(elem){
//     document.getElementById(elem).classList.toggle("hide")
//     // console.log(document.getElementById(elem.id))
// }

//Move element to destination div
function move(elemId, destinationId){
    document.getElementById(destinationId).appendChild(document.getElementById(elemId))
}

//Get  quert variable
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

//Remove elemtns with class
function removeElementsByClass(classString){
    var elements = document.getElementsByClassName(classString)

    for (var element of elements) {
        element.remove()
    }
}