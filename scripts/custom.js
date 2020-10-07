document.getElementById("flipBtn").addEventListener('click', function () {
    //Input data
    let inputWord = document.getElementById("reverseStr").value;
    //.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]|\s/gi, '')
    // in regex, | = or. || = or everywhere else 
    //replace(/[^A-Za-z0-9]/g, '')
    //Do something with data
    let lowerInput = inputWord.toLowerCase();
    let reverseWord = ""


    //A string is an array of characters
    //string word = [w][o][r][d]
    //               0  1  2  3
    //.length - 1, otherwise out of execution range 
    for (let loop = inputWord.length - 1; loop >= 0; loop--) {
        reverseWord += lowerInput.charAt(loop);
    }
    //let otherReverse = lowerInput.split("").reverse().join("");

    //Output new data

    if (lowerInput === reverseWord) {
        Swal.fire(
            "Palindrome!",
            "Nice! Try another!",
            'success'
        )
    }
    else {
        Swal.fire(
            "Not quite",
            "Try again!",
            'error'
        )
    }
    document.getElementById("reverseOutput").innerHTML = reverseWord;

})
