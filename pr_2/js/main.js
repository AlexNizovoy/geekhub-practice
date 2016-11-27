(function() {
    var testArr = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0];
    var test2 = [1, 2, 4, 2, 6, 3, 2, 4, 5, 4, 2, 4, 3, 2, 4, 3, 2];
    var test3 = [5, 4, 7, 5, 6, 7, 4, 6];
    console.log(testArr, waterValue(testArr));
    console.log(test2, waterValue(test2));
    console.log(waterValue(test3));

    function waterValue(arr) {
        var max = 0,
            maxIdx = 0,
            value = 0,
            idx = 0;

        arr.forEach(function(element, idx) {
            if (element > max) {
                max = element;
                maxIdx = idx;
            }
        });

        max = 0;
        for (; idx < maxIdx; idx++) {
            if (arr[idx] > max) {
                max = arr[idx];
            } else {
                value += max - arr[idx];
            }
        }
        max = 0;
        for (idx = arr.length - 1; idx > maxIdx; idx--) {
            if (arr[idx] > max) {
                max = arr[idx];
            } else {
                value += max - arr[idx];
            }
        }

        return value;
    }
})();