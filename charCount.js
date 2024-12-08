const charCount = (str)=>{
    const strObj ={};
    for (let index = 0; index < str.length; index++) {
        if (strObj[str[index]]) {
           strObj[str[index]] = strObj[str[index]] +1 
        } else {
            strObj[str[index]] = 1
        }
    }
    return strObj;
}

//charCount("aaa");
charCount("hello");
//charCount("aaaypousefypousef");