(function() {
    /**
     * Примеры массивов:
     * [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1]
     * [-1,-8,-2]
     * [1,7,3]
     * [1,undefined,3,5,-3]
     * [1,NaN,3,5,-3]
     */

    /**
     * maxValue() - searching a max value in array
     * @param  {Array} arr  Array of numbers
     * @return {Number}     max value in array
     */
    function maxValue(arr) {
        var idx = 0,
            len = arr.length || 0,
            maxV = arr[0] || 0;

        for (; idx < len; idx++) {
            if (arr[idx] > maxV) {
                maxV = arr[idx];
            }
        }

        return maxV;
    }

    /**
     * minValue() - searching a min value in array
     * @param  {Array} arr  Array of numbers
     * @return {Number}     min value in array
     */
    function minValue(arr) {
        var idx = 0,
            len = arr.length || 0,
            minV = arr[0] || 0;

        for (; idx < len; idx++) {
            if (arr[idx] < minV) {
                minV = arr[idx];
            }
        }

        return minV;
    }

    /**
     * sumArray() - summation of all elements in the array
     * @param  {Array} arr  Array of numbers
     * @return {Number}     the sum of all elements in the array
     */
    function sumArray(arr) {
        var idx = 0,
            len = arr.length || 0,
            sum = 0,
            buffer = 0;

        for (; idx < len; idx++) {
            buffer = parseFloat(arr[idx]);
            if (!isNaN(buffer)) {
                sum += buffer;
            }
        }

        return sum;
    }

    // Testind
    var testArray = [
            [3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2 - 3 - 1],
            [-1, -8, -2],
            [1, 7, 3],
            [1, undefined, 3, 5, -3],
            [1, NaN, 3, 5, -3]
        ],
        idx = 0,
        len;

    for (len = testArray.length; idx < len; idx++) {
        console.log("Testing array:", testArray[idx]);
        console.log("Min value: " + minValue(testArray[idx]));
        console.log("Max value: " + maxValue(testArray[idx]));
        console.log("Summation of all elements: " + sumArray(testArray[idx]));
        console.log("********************************************");
    }
    
})();