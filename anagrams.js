const anagrams = (str1, str2) => {
    if (str1.length !== str2.length) {
      return false;
    }
    let obj1 = {};
    let obj2 = {};
    // for (let i = 0; i < str1.length; i++) {
    //   obj1[str1[i]] = str1[i];
    // }
    // for (let i = 0; i < str2.length; i++) {
    //   if (!obj1[str2[i]]) return false;
    // }
    for (let i = 0; i < str1.length; i++) {
      obj1[str1[i]] = (obj1[str1[i]] || 0) + 1;
      obj2[str2[i]] = (obj2[str2[i]] || 0) + 1; // cuz the arrays are same length therefore the index exists in the array
    }
    for (let key in obj1) {
      if (!(key in obj2)) {
        return false;
      }
      if (obj2[key] !== obj1[key]) {
        return false;
      }
    }
    return true;
  };
  
  console.log(anagrams("listen", "silent"));
  console.log(anagrams("hello", "world"));
  console.log(anagrams("", ""));