//Dupla: Jaifer , Pablo
var array1 = [12, 34, 56, 12, 67]
var array2 = ['js', 'java', 'c#', 'python']

// Todas as funções devem ser implementadas sem efeitos colaterais, isto é,
// elas não devem modificar o array de entrada (no são in-place).

function first(array, qtd = 1) {
  if (array.length == 0)
  return []
  if(qtd ==1){
    novo = array[0]
    return novo

  }
  var novo = []
  for(var i=0;i<qtd;i++)
  novo.push(array[i])
  return novo

}

// [12, 34, 56, 12, 67]
//   0   1   2   3   4
// array.length = 5

function last(array, qtd = 1) {// [12, 34, 56, 12, 67]     3

    if (qtd == 1) {
      return array[array.length-1]
    }
    
    var novo = []
    for (var i = array.length - qtd; i < array.length; i++)  novo.push(array[i])
    return novo
  }
  
  // length = 5
  // qtd = 3
  // i = 4
  // novo = 
  function tail(array,qtd=1) {
    if(array.length==0){
      return []
    }
    
  var novo = []
  for (var i= 1; i < array.length; i++)  novo.push(array[i])
  return novo
  }
  console.log(tail(array1)) // [34, 56, 12, 67]
  console.log(tail([])) // []
  
  function without( array,valor) {
    var novo=[]
    var j=0
    for(var i =0;i<array.length;i++){
    if(valor!==array[i]) {
      novo[j]=array[i]
      j++
    }
  }
  return novo
  }
  console.log(without(array1, 34)) // [12, 56, 12, 67]
  console.log(without(array1, 12)) // [34, 56, 67]
  
  //function union(array,[]) {
   // var valor
   // var total=[]
   // var novo=[]
   // var final=[]
   // var j=0
   // for(var i =0;i<array.length;i++){
   //      novo[j]=array1[i]
       //  j++
     //   }
   // for(var i =0;i<array.length-1;i++){
     //    novo[j]=array2[i]
         //j++
       // }
   
        
          //     return novo
          // }
  
          function union(...args) {
            let array = [];
            for (let i = 0; i < args.length; i++) {
                let arr = args[i];
                for (let j = 0; j < arr.length; j++) {
                    let elem = arr[j];
                    if (!array.includes(elem)) {
                        array.push(elem);
                    }
                }
            }
            return array;
        }
  
        console.log(union(array1, array2)) // [12, 34, 56, 67, 'js', 'java', 'c#', 'python']
        console.log(union(array1, array2, [89, 34, 'ruby', 'js'])) // [12, 34, 56, 67, 'js', 'java', 'c#', 'python', 89, 'ruby']
  
  
    
  
  function unique(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < newArray.length; j++) {
            if (arr[i] === newArray[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
  }
  
  console.log(unique(array1)) // [12, 34, 56, 67]
  console.log(unique(['a', 'a', 'a'])) // []
  console.log(unique(['a', 'b', 'a', 'b'])) // ['a', 'b']
  
  function intersection(array1,array2) {
    var resposta = []
        for (var i=0; i < array1.length; i++){
            if (inn(array2, array1[i]))
                if (inn(resp,array1[i]) === false)
                    resposta.push(array1[i])
   }
   return resposta
}

    
function difference(array1,array2) {
    var resposta = []
    for (var i=0; i < array1.length; i++){
        if (inn(array2, array1[i]) === false)
            // if (inn(resp,array1[i]))
            resposta.push(array1[i])
    }
            for (var i=0; i < array2.length; i++){
        if (inn(array1, array2[i]) === false) resposta.push(array2[i])
    }
    return resposta
        }

function zip(array1, array2) {
    var resposta = []

    if (array2 === undefined){ 
        for (var i=0; i < array1.length; i++){
            resposta.push([array1[i]])
        }
        return resposta
    }
    for (var i=0; i < array1.length; i++){
        resposta.push([array1[i], array2[i]])
    }
    return resposta
}
function compact(array1) {
    var resposta = []
    for (var i=0; i < array1.length; i++){
        if (array1[i] === null || array1[i] === undefined || array1[i] === 0 || isNaN(array1[i])){
        } else resposta.push(array1[i])
    }
    return resposta
}
function flatten(array1, depth = 1) {
    var resposta = []
    for (var i=0; i < array1.length; i++){
        if (Array.isArray(array1[i]) && depth > 0){
            var temp = flatten(array1[i], depth - 1)
            for (var j=0; j < temp.length; j++){
                resposta.push(temp[j])
            }
        } else resposta.push(array1[i])
    }
    return resposta
}
function equals(array1, array2) {
    if (array1.length !== array2.length) return false
    for (var i=0; i < array1.length; i++){
        if (Array.isArray(array1[i]) && Array.isArray(array2[i])){
            if (equals(array1[i], array2[i]) === false) return false
        } else if (array1[i] !== array2[i]) return false
    }
    return true
}

console.log(first(array1)) // 12
console.log(first(array1, 3)) // [12, 34, 56]
console.log(first([], 3)) // []

console.log(last(array1)) // 67
console.log(last(array1, 3)) // [56, 12, 67]

console.log(tail(array1)) // [34, 56, 12, 67]
console.log(tail([])) // []

console.log(without(array1, 34)) // [12, 56, 12, 67]
console.log(without(array1, 12)) // [34, 56, 67]

console.log(union(array1, array2)) // [12, 34, 56, 67, 'js', 'java', 'c#', 'python']
console.log(union(array1, array2, [89, 34, 'ruby', 'js'])) // [12, 34, 56, 67, 'js', 'java', 'c#', 'python', 89, 'ruby']

console.log(unique(array1)) // [12, 34, 56, 67]
console.log(unique(['a', 'a', 'a'])) // ['a']
console.log(unique(['a', 'b', 'a', 'b'])) // ['a', 'b']

console.log(intersection(['a', 4, 'c', 8], [8, 'b', 'c', 34])) // ['c', 8]
console.log(intersection([8, 'a', 4, 'c', 8], [8, 'b', 'c', 34])) // [8, 'c']

console.log(difference(['a', 4, 'c', 8], [8, 'b', 'c', 34])) // ['a', 4, 'b', 34]
console.log(difference([], array1)) // []
console.log(difference(array1, [])) // [12, 34, 56, 12, 67]
console.log(difference(array1, array2)) // [12, 34, 56, 12, 67]
console.log(difference(array1, [56, 67])) // [12, 34, 12]

console.log(zip([12, 45], [67, 90])) // [[12, 67], [45, 90]]
console.log(zip(array2, [67, 90, 52, 56])) // [['js', 67], ['java', 90], ['c#', 52], ['python', 56]]
console.log(zip(array1, [67, 90, 52, 56], ['brendan eich', 'james gosling', 'anders hejlsberg', 'guido van rossum']))
// [['js', 67, 'brendan eich'], ['java', 90, 'james gosling'], ['c#', 52, 'anders hejlsberg'], ['python', 56, 'guido van rossum']]
console.log(zip([12, 45, 89], [67, 90])) // [[12, 67], [45, 90], [89, undefined]]
console.log(zip([12, 45])) // [[12], [45]]

console.log(compact([45, 23])) // [45, 23]
console.log(compact([45, 23, null])) // [45, 23]
console.log(compact([NaN, 23, null, 12])) // [23, 12]
console.log(compact([NaN, 23, null, 12, undefined, 78])) // [23, 12, 78]
console.log(compact([NaN, 23, null, 12, undefined, 78, 0, false, ''])) // [23, 12, 78, 0, false, '']
console.log(compact(array1)) // [12, 34, 56, 12, 67]

var depth = 2 // profundidade
var nested = [34, 54, [45, 23, [78, 90, [65]]], 12]
console.log(flatten([34, 54, [45, 23], 12])) // [34, 54, 45, 23, 12]
console.log(flatten([34, 54, [45, 23], 12, [78, 90]])) // [34, 54, 45, 23, 12, 78, 90]
console.log(flatten([34, 54, [45, 23, [78, 90]], 12])) // [34, 54, 45, 23, [78, 90], 12]
console.log(flatten([34, 54, [45, 23, [78, 90]], 12], depth)) // [34, 54, 45, 23, 78, 90, 12]
console.log(flatten(nested, depth)) // [34, 54, 45, 23, 78, 90, [65], 12]
console.log(flatten(nested, 3)) // [34, 54, 45, 23, 78, 90, 65, 12]
console.log(flatten(array1)) // [12, 34, 56, 12, 67]

console.log(equals([1, 2, 3], [1, 2, 3])) // true
console.log(equals([1, 2, 3], [1, 3, 2])) // false
console.log(equals(array1, array2)) // false
console.log(equals([1, [2, 3], 4], [1, [2, 3], 4])) // true
console.log(equals([1, [2, 3], 4], [1, [3, 2], 4])) // false
console.log(equals(nested, nested)) // true
console.log(equals(nested, [34, 54, [45, 23, [78, 90, [65]]], 12])) // true
console.log(equals([34, 54, [45, 23, [78, 90, [65]]], 12], nested)) // true

console.log(array1) // [12, 34, 56, 12, 67]
console.log(array2) // ['js', 'java', 'c#', 'python']
  
  
    
  
   
  
  
  