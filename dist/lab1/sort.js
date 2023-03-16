var arrSort1 = [2, 9, 10, 6, 10];
function labSort(arr1, callback) {
    if (callback) {
        var temp1 = [];
        for (var i = 0; i < arr1.length - 1; i++) {
            for (var j = i + 1; j < arr1.length; i++) {
                if (arr1[i] < arr1[j]) {
                    var temp = arr1[i];
                    arr1[i] = arr1[j];
                    arr1[j] = temp;
                }
                var newItem = callback(arr1[i], arr1[j]);
                temp1.push(newItem);
            }
            return temp1;
        }
    }
    return;
}
var taingu = labSort(arrSort1, function (a, b) {
    return a - b;
});
console.log(arrSort1);
