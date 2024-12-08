const containsCommonItems =(arr1, arr2)=>{
    const arr1Obj = {};
    arr1.forEach((item)=> arr1Obj[item] = item);
    for (let item of arr2) {
        if(arr1Obj[item]) return true;
    }
    return false
}

containsCommonItems(["a","b","c","x"],["z","y","a"]);
//containsCommonItems(["a","b","c","x"],["z","y","d"])