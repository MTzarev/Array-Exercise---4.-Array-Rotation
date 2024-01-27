function arrayRotation(arr, rotation) {
    for (let curRotation = 0; curRotation < rotation; curRotation++) {
        let firstEl = arr.shift();
        arr.push(firstEl);


    }

    console.log(arr.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2);
