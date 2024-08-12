//UI Components
import { navbar } from "./components/navbar.js"
import { sidebar } from "./components/sidebar.js"
import { titleText } from "./components/titleText.js"
import { mainImage } from "./components/mainImage.js"
import { textArea } from "./components/mainArticle.js"
import { authorName } from "./components/authorName.js"

// Firebase Functions
import { loadDocByButton } from "./lib/firebase.js"
import { loadMainArticleImage } from "./lib/firebase.js"

const container = document.getElementById("navbar-container").appendChild(navbar())
const leftSection = document.getElementById("left-section")
const rightSection = document.getElementById("right-section")

const loadedArticle = {
    title: "n/a",
    mainImageSrc: "n/a",
    mainImageCaption: "n/a",
    articleText: "n/a",
    authorName: "n/a"
}

let articleData;

document.addEventListener("click", (event) => {
    const data = loadDocByButton(event.target.textContent)
    loadMainArticleImage(event.target.textContent)
    
    Promise.resolve(data).then(element => {
        articleData = element

        loadedArticle.title = articleData.title
        loadedArticle.articleText = articleData.mainArticle
        loadedArticle.mainImageCaption = articleData.imageCaption
        loadedArticle.authorName = articleData.authorName

        rightSection.innerHTML = ''

        rightSection.appendChild(titleText(loadedArticle.title))
        rightSection.appendChild(mainImage("", loadedArticle.mainImageCaption))
        rightSection.appendChild(textArea(replaceNewlinesWithBrTags(loadedArticle.articleText)))
        rightSection.appendChild(authorName(loadedArticle.authorName))
    })
    
})

leftSection.appendChild(sidebar())

function replaceNewlinesWithBrTags(inputString) {
    return inputString.replace(/\n/g, "<br>")
}





