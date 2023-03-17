const arrSort1 = [2,9,10,6,10];
function labSort (arr1:number[],callback?:(a:number,b:number)=>number){
for(let i = 0;i<arr1.length-1;i++){
for(let j = i+1;j<arr1.length;i++){
    const newItem = callback(arr1[i],arr1[j]);
    if(newItem > 0){
        let temp = arr1[i]
        arr1[i] = arr1[j]
        arr1[j] = temp
    }
}
    }
    
}
const taingu = labSort(arrSort1,(a,b)=>{
       return a-b;
})
console.log(taingu);


