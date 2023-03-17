var arrSort1 = [2, 9, 10, 6, 10];
var arrSort2 = ["mot", "hai", "ba", "bon"];
function labSort(arr1, callback) {
    for (var i = 0; i < arr1.length - 1; i++) {
        for (var j = i + 1; j < arr1.length; i++) {
            var newItem = callback(arr1[i], arr1[j]);
            if (newItem > 0) {
                var temp = arr1[i];
                arr1[i] = arr1[j];
                arr1[j] = temp;
            }
        }
    }
}
var taingu = labSort(arrSort1, function (a, b) {
    return a - b;
});
