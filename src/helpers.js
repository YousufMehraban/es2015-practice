
// we can aslo import _sample method from lodash library and use it. 

function choice(arr){
    const random = Math.floor(Math.random() * arr.length)
    return arr[random]
}


function remove(items, item){
    // return items.filter((i)=> i !== item)
    for (let i = 0; i < items.length; i ++){
        if (items[i] === item){
            items.splice(i, 1)
            return items
        }
    }return undefined
}


export {choice, remove}