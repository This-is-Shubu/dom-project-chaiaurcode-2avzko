
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
document.body.style.backgroundColor = colorChange();