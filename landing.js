const randomHexColorCode = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return "#" + n.slice(0, 6);
};

const setColor = (element) => {
    const color = randomHexColorCode();
    element.style.backgroundColor = color;
};

const getColorPalette = () => {
    const colorContainers = document.getElementsByClassName("pc-color-container");
    for (element of colorContainers) {
        setColor(element);
    }
};

getColorPalette();
setInterval(getColorPalette, 1000)
