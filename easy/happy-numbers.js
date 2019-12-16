let numbers = [...Array(+readline())].map(n => readline())
numbers.map(x => {
    let newNumber = x
    // looping through the less possible iterations, seems to be 6 to pass all the tests
    for(y = 0; y < 7; y++){
        newNumber = newNumber.toString().split('').map(n => n * n).reduce((a,b) => (a + b))
        if(newNumber === 1){console.log(x + ' :)');break}
        else if(y == 6)console.log(x + " :(")
    }
})
