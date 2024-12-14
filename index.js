function myEach(collection, callback){
    for(const element in collection){
        callback(collection[element])
    }

    return collection
}

function myMap(collection, callback){
    const newArray = []

    for(const element in collection){
        newArray.push(callback(collection[element]))
    }

    return newArray
}

function myReduce(collection, callback, acc){
    let total
    let skipIteration = false
    if(acc === undefined){
        skipIteration = true
    }
    else{
        total = acc
    }

    for(const element in collection){
        if(!skipIteration){
            total = callback(total, collection[element], collection)
        }
        else{
            total = collection[element]
            skipIteration = false
        }
    }

    return total
}

function myFind(collection, predicate){
    for(const element in collection){
        if(predicate(collection[element])){
            return collection[element]
        }
    }
    return undefined
}

function myFilter(collection, predicate){
    const newArray = []

    for(const element in collection){
        if(predicate(collection[element])){
            newArray.push(collection[element])
        }
    }

    return newArray
}

function mySize(collection){
    let size = 0
    
    for(const key in collection){
        size++
    }

    return size
}

function myFirst(array, n){
    if(n === undefined){
        return array[0]
    }
    else{
        return array.slice(0, n)
    }
}

function myLast(array, n){
    if(n === undefined){
        return array[mySize(array) - 1]
    }
    return array.slice(mySize(array) - n, mySize(array))
}

function myKeys(object){
    const keyNamesArray = []

    for(const key in object){
        keyNamesArray.push(key)
    }

    return keyNamesArray
}

function myValues(object){
    const valuesArray = []

    for(const key in object){
        valuesArray.push(object[key])
    }

    return valuesArray
}