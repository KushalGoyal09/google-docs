const bold = document.getElementById("bold")
const italic = document.getElementById("italic")
const underline = document.getElementById("underline")
const fontInput = document.getElementById("font")
const docs = document.getElementById("docs")
const save = document.getElementById("save")
const error = document.getElementById("error")
const clear = document.getElementById("clear")
const family = document.querySelectorAll("#family-list>li")
const fontBtn = document.getElementById("font-btn")
const left = document.getElementById("left")
const right = document.getElementById("right")
const center = document.getElementById("center")
const justify = document.getElementById("justify")
let spellcheck
let fontFamily
let docName
let Myobject
let nameArray = []

if (localStorage.getItem("name")) {
    nameArray = JSON.parse(localStorage.getItem("name"))
    docName = nameArray[nameArray.length - 1]
}

if (localStorage.getItem(docName)) {
    const object = JSON.parse(localStorage.getItem(docName))
    document.title = docName
    docs.style.textAlign = object.align
    fontFamily = object.family
    docs.style.fontFamily = fontFamily
    fontBtn.innerText = fontFamily
    docs.value = object.innerText
    fontInput.value = object.font
    docs.style.fontSize = fontInput.value
    docs.style.fontWeight = object.bold
    docs.style.textDecoration = object.underline
    docs.style.fontStyle = object.italic
    spellcheck = object.spellcheck
    docs.spellcheck = spellcheck
} else {
    docs.style.textAlign = "left"
    fontFamily = "Arial"
    docs.style.fontFamily = fontFamily
    fontBtn.innerText = fontFamily
    docs.value = ""
    fontInput.value = "16px"
    docs.style.fontSize = fontInput.value
    docs.style.fontWeight = "normal"
    docs.style.textDecoration = "none"
    docs.style.fontStyle = "normal"
    spellcheck = true
    docs.spellcheck = spellcheck
}

if (spellcheck === true) {
    error.innerText = "Don't Show SpellCheck"
    error.style.backgroundColor = "#F0F0F0"
} else {
    error.innerText = "Show SpellCheck"
    error.style.backgroundColor = "antiquewhite"
}

if (docs.style.fontWeight === "bold") {
    bold.style.backgroundColor = "antiquewhite"
} else {
    bold.style.backgroundColor = "#F0F0F0"
}
if (docs.style.fontStyle === "italic") {
    italic.style.backgroundColor = "antiquewhite"
} else {
    italic.style.backgroundColor = "#F0F0F0"
}
if (docs.style.textDecoration === "underline") {
    underline.style.backgroundColor = "antiquewhite"
} else {
    underline.style.backgroundColor = "#F0F0F0"
}

if (docs.style.textAlign === "left") {
    left.style.backgroundColor = "antiquewhite"
    right.style.backgroundColor = "#F0F0F0"
    center.style.backgroundColor = "#F0F0F0"
    justify.style.backgroundColor = "#F0F0F0"
} else if (docs.style.textAlign === "right") {
    right.style.backgroundColor = "antiquewhite"
    left.style.backgroundColor = "#F0F0F0"
    center.style.backgroundColor = "#F0F0F0"
    justify.style.backgroundColor = "#F0F0F0"
} else if (docs.style.textAlign === "center") {
    center.style.backgroundColor = "antiquewhite"
    left.style.backgroundColor = "#F0F0F0"
    right.style.backgroundColor = "#F0F0F0"
    justify.style.backgroundColor = "#F0F0F0"
} else {
    justify.style.backgroundColor = "antiquewhite"
    left.style.backgroundColor = "#F0F0F0"
    right.style.backgroundColor = "#F0F0F0"
    center.style.backgroundColor = "#F0F0F0"
}

bold.addEventListener("click", () => {
    if (docs.style.fontWeight === "bold") {
        docs.style.fontWeight = "normal"
        bold.style.backgroundColor = "#F0F0F0"
    } else {
        docs.style.fontWeight = "bold"
        bold.style.backgroundColor = "antiquewhite"
    }
})

italic.addEventListener("click", () => {
    if (docs.style.fontStyle === "italic") {
        docs.style.fontStyle = "normal"
        italic.style.backgroundColor = "#F0F0F0"
    } else {
        docs.style.fontStyle = "italic"
        italic.style.backgroundColor = "antiquewhite"
    }
})

underline.addEventListener("click", () => {
    if (docs.style.textDecoration === "underline") {
        docs.style.textDecoration = "none"
        underline.style.backgroundColor = "#F0F0F0"
    } else {
        docs.style.textDecoration = "underline"
        underline.style.backgroundColor = "antiquewhite"
    }
})

fontInput.addEventListener("keypress", (event) => {
    if (event.key = "enter") {
        docs.style.fontSize = fontInput.value
    }
})

error.addEventListener("click", () => {
    if (spellcheck === true) {
        spellcheck = false
        docs.spellcheck = spellcheck
        error.style.backgroundColor = "antiquewhite"
        error.innerText = "Show SpellCheck"
    } else {
        spellcheck = true
        docs.spellcheck = spellcheck
        error.style.backgroundColor = "#F0F0F0"
        error.innerText = "Don't Show SpellCheck"
    }
})

family.forEach(element => {
    element.addEventListener("mouseover", () => {
        docs.style.fontFamily = element.innerText
    })
    element.addEventListener("mouseout", () => {
        docs.style.fontFamily = fontFamily
    })
    element.addEventListener("click", () => {
        fontFamily = element.innerText
        docs.style.fontFamily = fontFamily
        fontBtn.innerText = fontFamily
    })
})

left.addEventListener("click", () => {
    docs.style.textAlign = "left"
    if (docs.style.textAlign === "left") {
        left.style.backgroundColor = "antiquewhite"
        right.style.backgroundColor = "#F0F0F0"
        center.style.backgroundColor = "#F0F0F0"
        justify.style.backgroundColor = "#F0F0F0"
    } else if (docs.style.textAlign === "right") {
        right.style.backgroundColor = "antiquewhite"
        left.style.backgroundColor = "#F0F0F0"
        center.style.backgroundColor = "#F0F0F0"
        justify.style.backgroundColor = "#F0F0F0"
    } else if (docs.style.textAlign === "center") {
        center.style.backgroundColor = "antiquewhite"
        left.style.backgroundColor = "#F0F0F0"
        right.style.backgroundColor = "#F0F0F0"
        justify.style.backgroundColor = "#F0F0F0"
    } else {
        justify.style.backgroundColor = "antiquewhite"
        left.style.backgroundColor = "#F0F0F0"
        right.style.backgroundColor = "#F0F0F0"
        center.style.backgroundColor = "#F0F0F0"
    }
})
right.addEventListener("click", () => {
    docs.style.textAlign = "right"
    if (docs.style.textAlign === "left") {
        left.style.backgroundColor = "antiquewhite"
        right.style.backgroundColor = "#F0F0F0"
        center.style.backgroundColor = "#F0F0F0"
        justify.style.backgroundColor = "#F0F0F0"
    } else if (docs.style.textAlign === "right") {
        right.style.backgroundColor = "antiquewhite"
        left.style.backgroundColor = "#F0F0F0"
        center.style.backgroundColor = "#F0F0F0"
        justify.style.backgroundColor = "#F0F0F0"
    } else if (docs.style.textAlign === "center") {
        center.style.backgroundColor = "antiquewhite"
        left.style.backgroundColor = "#F0F0F0"
        right.style.backgroundColor = "#F0F0F0"
        justify.style.backgroundColor = "#F0F0F0"
    } else {
        justify.style.backgroundColor = "antiquewhite"
        left.style.backgroundColor = "#F0F0F0"
        right.style.backgroundColor = "#F0F0F0"
        center.style.backgroundColor = "#F0F0F0"
    }
})
center.addEventListener("click", () => {
    docs.style.textAlign = "center"
    if (docs.style.textAlign === "left") {
        left.style.backgroundColor = "antiquewhite"
        right.style.backgroundColor = "#F0F0F0"
        center.style.backgroundColor = "#F0F0F0"
        justify.style.backgroundColor = "#F0F0F0"
    } else if (docs.style.textAlign === "right") {
        right.style.backgroundColor = "antiquewhite"
        left.style.backgroundColor = "#F0F0F0"
        center.style.backgroundColor = "#F0F0F0"
        justify.style.backgroundColor = "#F0F0F0"
    } else if (docs.style.textAlign === "center") {
        center.style.backgroundColor = "antiquewhite"
        left.style.backgroundColor = "#F0F0F0"
        right.style.backgroundColor = "#F0F0F0"
        justify.style.backgroundColor = "#F0F0F0"
    } else {
        justify.style.backgroundColor = "antiquewhite"
        left.style.backgroundColor = "#F0F0F0"
        right.style.backgroundColor = "#F0F0F0"
        center.style.backgroundColor = "#F0F0F0"
    }
})
justify.addEventListener("click", () => {
    docs.style.textAlign = "justify"
    if (docs.style.textAlign === "left") {
        left.style.backgroundColor = "antiquewhite"
        right.style.backgroundColor = "#F0F0F0"
        center.style.backgroundColor = "#F0F0F0"
        justify.style.backgroundColor = "#F0F0F0"
    } else if (docs.style.textAlign === "right") {
        right.style.backgroundColor = "antiquewhite"
        left.style.backgroundColor = "#F0F0F0"
        center.style.backgroundColor = "#F0F0F0"
        justify.style.backgroundColor = "#F0F0F0"
    } else if (docs.style.textAlign === "center") {
        center.style.backgroundColor = "antiquewhite"
        left.style.backgroundColor = "#F0F0F0"
        right.style.backgroundColor = "#F0F0F0"
        justify.style.backgroundColor = "#F0F0F0"
    } else {
        justify.style.backgroundColor = "antiquewhite"
        left.style.backgroundColor = "#F0F0F0"
        right.style.backgroundColor = "#F0F0F0"
        center.style.backgroundColor = "#F0F0F0"
    }
})

save.addEventListener("click", () => {
    docName = prompt("Name of File", `Untitled Document ${nameArray.length}`)
    if (docName) {
        document.title = docName
        nameArray.push(`${docName}`)
        Myobject = {
            name: docName,
            innerText: docs.value,
            bold: docs.style.fontWeight,
            underline: docs.style.textDecoration,
            italic: docs.style.fontStyle,
            font: fontInput.value,
            spellcheck: spellcheck,
            family: fontFamily,
            align: docs.style.textAlign
        }
        localStorage.setItem("name", JSON.stringify(nameArray))
        localStorage.setItem(`${docName}`, JSON.stringify(Myobject))
    }
})

clear.addEventListener("click", () => {
    if (docName) {
        localStorage.removeItem(docName)
        nameArray.pop()
        localStorage.setItem("name", JSON.stringify(nameArray))
        window.location.reload()
    } else {
        window.location.reload()
    }
})