var arrSort1 = [2, 9, 10, 6, 10];
var arrSort2 = ["mot", "hai", "ba", "bon"];
function labSort(arr1, callback) {
    if (!callback) {
        callback = function (a, b) {
            if (a > b) {
                return 1;
            }
            else {
                return -1;
            }
        };
    }
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
    return arr1;
}
var taingu = labSort(arrSort2, function (a, b) {
    return a.localeCompare(b);
});
