const randomHexColorCode = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
};


const setColor = (element) => {
    const color = randomHexColorCode();
    element.style.backgroundColor = color;
    element.querySelector(".color-code").innerHTML = color.toUpperCase();
}

const getColorPalette = () => {
    const colorContainers = document.getElementsByClassName("color-container");
    for (element of colorContainers) {
        if (!element.querySelector(".locked")) {
            setColor(element)
        }
    }
}

const copyToClipboard = (e) => {
    const copyInfo =document.querySelector(".copy-info");
    copyInfo.parentElement.classList.add("slide-animation")
    setTimeout(() => copyInfo.parentElement.classList.remove("slide-animation"), 3000)
    const parent = e.parentElement;
    const colorCode = parent.querySelector(".color-code").innerHTML;
    navigator.clipboard.writeText(colorCode);
}

const swapColor = (e) => {
    const parent = e.parentElement;
    setColor(parent)
}

const setLock = (e) => {
    const { classList } = e;
    if (classList.contains("unlocked")) {
        classList.remove("unlocked")
        classList.add("locked")
        e.src = "resources/locked.svg"
    } else {
        classList.remove("locked")
        classList.add("unlocked")
        e.src = "resources/unlocked.svg"
    }
}


document.body.onkeyup = function (e) {
    if (e.key == " " ||
        e.code == "Space" ||
        e.keyCode == 32
    ) {
        getColorPalette()
    }
}


getColorPalette();