function getEven(arr) {
    res=[];
    arr.forEach(ele => {
        if (ele%2===0){
            res.push(ele)
        }
        
    });
    return res;
}

    /* 
        Return an array containing only even numbers as a result
        Example
            Input: [1,4,5,77,8,90]
            Output: [4,8,90]

        Write you code below
    */



function multiplyByN(arr, n) {
    var res=[];
    for (var i=0;i<arr.length;i++){
        res.push(n*arr[i]);
    }
    return res;
}
   
    /* 
        Return an array whose elements are multiplied by n
        Example
            Input: [1,3,4,55], 3
            Output: [3,9,13,165]
        Write you code below
    */


function removeNthElement(arr, n) {
    var res=[];
    for(var i=0;i<arr.length;i++){
        if (i===n){
            continue
        }else{
            res.push(arr[i]);
        }
    }
    return res;
}    

    /*
        Return the array with the element present at index n removed
        Example
            Input: [1,3,4,6,7] 3
            Output: [1,3,4,7]
        Write you code below
    */


module.exports = {
    getEven,
    multiplyByN,
    removeNthElement
}