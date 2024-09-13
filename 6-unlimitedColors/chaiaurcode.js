
function colorChange() {
    const hex = "0123456789ABCDEF"
    let color = "#"
    for (i = 0; i < 6; i++) {
        const randomColor = hex[Math.floor(Math.random() * 16)]
        color += randomColor
    }
    console.log(color)
    return color
}

let intervalId;
const startColorChange = function () {
    if (!intervalId) {
        intervalId = setInterval(bgColorChange, 1000)
    }
    function bgColorChange() {
        document.body.style.backgroundColor = colorChange()
    }
}

const stopColorChange = function () {
    clearInterval(intervalId)
    intervalId = null;
}
// used intervalId = null to reset the value of intervalId

document.querySelector('#start').addEventListener('click', startColorChange)

document.querySelector('#stop').addEventListener('click', stopColorChange)