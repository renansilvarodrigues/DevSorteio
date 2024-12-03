function generateNumber(){
    const min = Math.ceil(document.querySelector('.inpute').value)
    const max = Math.floor(document.querySelector('.inputentre').value)

const result = Math.floor(Math.random() * (max - min) + min);

alert(result)

    console.log(min, max)
}