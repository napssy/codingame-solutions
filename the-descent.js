while (true) {
    let mountains = [...Array(8)].map(n => parseInt(readline()))
    console.log(mountains.indexOf(Math.max(...mountains)));
}
