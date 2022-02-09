function CreateObject(arr) {
    let object={};
    for (let i=0;i<arr.length;i+=2){
        object[arr[i]]=arr[i+1];
    }
    return(object);

    // Write your code here
}

module.exports = CreateObject;
