document.getElementById("flipBtn").addEventListener('click', function () {
    let regex = /[\W_]/g;
    let userInput = document.getElementById("userInput").value;

    let lowerInput = userInput.toLowerCase().replace(regex, '');
    let reverseIn = lowerInput.split('').reverse().join('');


    if (reverseIn === lowerInput) {
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

    if (reverseIn == "") {
        Swal.fire(
            "Error",
            "Please enter a word or phrase"
        )
    }

    //Output new data

    document.getElementById("output").innerHTML = reverseIn;
})

document.getElementById("userInput").addEventListener('keydown', function (evt) {

    var character = (evt.which) ? evt.which : evt.keycode;
    if (character >= 97 && character <= 122 ||
        character >= 65 && charcter <= 90 ||
        character === 8 || character === 32) {

        return true;
        }
        else {
            evt.preventDefault();
        return false;
        }
})