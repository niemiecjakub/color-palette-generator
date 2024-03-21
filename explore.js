const randomHexColorCode = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return "#" + n.slice(0, 6);
};

const setColor = (element) => {
    const color = randomHexColorCode();
    element.style.backgroundColor = color;
};

const getColorPalette = () => {
    const colorContainers = document.getElementsByClassName("color-container");
    for (element of colorContainers) {
        setColor(element);
    }
};

const addColorRows = () => {
    const screenWidth = window.innerWidth;
    let nPalettesInRow = Math.floor(screenWidth / 150);
    if (nPalettesInRow > 7) {
        nPalettesInRow = 7;
    }
    for (let i = 0; i < 10; i++) {
        var newRow = document.createElement("div");
        newRow.classList.add("color-row");

        for (var j = 0; j < nPalettesInRow; j++) {
            var rowContainer = document.createElement("div");
            rowContainer.classList.add("color-row-container");

            for (var k = 0; k < 5; k++) {
                var colorContainer = document.createElement("div");
                colorContainer.classList.add("color-container");
                rowContainer.appendChild(colorContainer);
            }
            newRow.appendChild(rowContainer);
        }
        var paletteSection = document.getElementById("palette");
        paletteSection.appendChild(newRow);
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const palette = document.getElementById("palette");
    const clone = palette.cloneNode(true);
    palette.parentNode.replaceChild(clone, palette);
});

addColorRows();
getColorPalette();
setInterval(getColorPalette, 1000);
