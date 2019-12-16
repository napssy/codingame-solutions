const intext = readline().toLowerCase()
console.log(intext.replace(/(\s+)?([,.;])(\s+)?/g, '$2') // handling double space
    .replace(/(([,.;])\2*)/g, '$2') // handling double punctuation
    .replace(/([,.;])/g, '$1 ') // adding space after punctuation
    .replace(/(^|\. )(.)/g, (n) => n.toUpperCase()) // upper case first letter of each sentences
    .trim()
)
