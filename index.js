// Code your solutions in this file
const newList=[]
function writeCards(names,event){
    for(let i=0;i<names.length;i++){
       let message=`Thank you, ${names[i]}, for the wonderful ${event} gift!`
        newList.push(message)
    }
    return newList
}
function countDown(number){
    for(let i=number;i>=0;i--){
        console.log(i)
    }
}