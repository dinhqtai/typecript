const arrSort1 = [2,9,10,6,10];
function labSort<T> (arr1:T[],callback?:(a:T,b:T)=>T):T[]{
let temp1 = [];
for(let i = 0;i<arr1.length-1;i++){
for(let j = i+1;j<arr1.length;i++){
    if(arr1[i]<arr1[j]){
        let temp = arr1[i]
        arr1[i] = arr1[j]
        arr1[j] = temp
    }
    const newItem = callback(arr1[i],arr1[j]);
    temp1.push(newItem);
}
    }
    return temp1;
    
}
const taingu = labSort(arrSort1,(a,b)=>{
       return a-b;
})
console.log(taingu);


