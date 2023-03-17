const arrSort1 = [2,9,10,6,10];
const arrSort2 = ["mot","hai","ba","bon"];
function labSort<T> (arr1:T[],callback?:(a:T,b:T)=>number):T[]{
    if(!callback){
        callback = (a:T,b:T):number=>{
            if(a>b){
                return 1
            }else{
                return -1
            }
        }
}
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
    return arr1 
}
const taingu = labSort(arrSort2,(a,b)=>{
       return a.localeCompare(b);
})


     