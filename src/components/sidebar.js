import { docLists } from "./docLists.js"
import { getDocTitlePlate } from "../lib/firebase.js"
// import { loadDocByButton } from "../lib/firebase.js"

export function sidebar() {
     /*
    <div class="d-flex flex-column align-items-stretch flex-shrink-0">
    </div>
    */

    const parentDiv = document.createElement("div")
    parentDiv.className = "d-flex flex-column align-items-stretch flex-shrink-0"

    /*
        <div class="list-group list-group-flush border-bottom scrollarea">
        </div>
    */

        // const listGroupDiv = document.createElement("div")
        // listGroupDiv.className = "list-group list-group-flush border-bottom scrollarea"
        // parentDiv.appendChild(listGroupDiv)

        /*
            <h1 class="display-6">Recent Blog Post Articles</h1>
        */

        const h1 = document.createElement("h1")
        h1.className = "display-6 p-3"
        h1.textContent = "Recent Blog Post Articles"
        h1.style.fontSize = "24px"
        parentDiv.appendChild(h1)

        const myPromise = Promise.resolve(getDocTitlePlate())

        myPromise.then(element => {
            element.forEach(item => {
                const button = docLists(item)

                // button.addEventListener("click", (event) => {
                //     const clickedBtnText = event.target.textContent

                //     console.log("button Clicked:", clickedBtnText)

                //     loadDocByButton(clickedBtnText)

                //     const CloudStoreData = loadDocByButton(clickedBtnText)
                //     console.log(CloudStoreData)
                // })

                parentDiv.appendChild(button)
            })
        })

        // parentDiv.appendChild(docLists("articleTitle"))
        


    return parentDiv
}

console.log()