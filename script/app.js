const quotes = []
quotes.push({
        quote: "One man practicing sportsmanship is far better than 50 preaching it.",
        source: "Knute Rockne",
        citation: "Field",
        year: 2014,

    },
    {
        quote: "The only way to prove that you’re a good sport is to lose.",
        source: "Ernie Banks",
    },
    {
        quote: "Somebody gives you an opportunity, say yes to it. So what if you fail? you won’t know if you fail or succeed unless you try.",
        source: "Ann Meyers",
        citation: "Streefkerk",
    },
    {
        quote: "Make sure your worst enemy doesn’t live between your own two ears.",
        source: "Laird Hamilton",
    },
    {
        quote: "Always work hard, never give up, and fight until the end because it’s never really over until the whistle blows.",
        source: "Alex Morgan",
        citation: "Twitter",
        year: 2004,
    },
    {
        quote: "I believe in the impossible because no one else does.",
        source: "Florence Griffith Joyner",
        year: 1999,
    },
    {
        quote: "No matter the circumstances that you may be going through, just push through it.",
        source: "Ray Lewis",
    })

function ClearAllIntervals() {
    for (var i = 1; i < 99999; i++)
        window.clearInterval(i);
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function randomSlightlyDarkColor() {
    let r = randomNumber(0, 180)
    let g = randomNumber(0, 180)
    let b = randomNumber(0, 180)
    return `rgb(${r},${g},${b})`
}

function setRandomBGColor() {
    document.querySelector("body").style.backgroundColor = randomSlightlyDarkColor()
}


function getRandomQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length)
    return quotes[randomIndex]
}

function printQuote() {
    const randomQuote = getRandomQuote()
    let html = `<p class="quote">${randomQuote.quote}</p><p class="source">${randomQuote.source}`

    if (randomQuote.citation) {
        html += `<span class="citation">${randomQuote.citation}</span>`
    }
    if (randomQuote.year) {
        html += `<span class="year">${randomQuote.year}</span>`
    }
    html += '</p>'

    document.getElementById('quote-box').innerHTML = html
}

document.getElementById("load-quote").addEventListener("click", (e) => {
    e.preventDefault()
    handler()
})


function handler() {
    setRandomBGColor()
    printQuote()
}

const controlButton = document.querySelector(".control_button")
const playSVG = document.querySelector(".play-svg")
const pauseSVG = document.querySelector(".pause-svg")
controlButton.addEventListener("click", () => {
    playSVG.classList.toggle("hide")
    pauseSVG.classList.toggle("hide")
    var isPlaying = playSVG.classList.contains('hide');
    if (!isPlaying) {
        ClearAllIntervals()
        return
    }
    setInterval(handler, 5000)
})


