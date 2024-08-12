export function authorName(authorName) {
   /*
   <div class="d-flex align-items-center">
   </div>
   */

   const parentDiv = document.createElement("div")
   parentDiv.className = "d-flex align-items-center px-4 py-1"

   /*
        <div class="flex-shrink-0">
        </div>
   */

        const flexShrinkDiv = document.createElement("div")
        flexShrinkDiv.className = "flex-shrink-0"
        parentDiv.appendChild(flexShrinkDiv)

   /*
            <img src="./assets/default-profile-pic.svg" class="rounded-circle --profile-pic">
   */

            const img = document.createElement("img")
            img.src = "./assets/default-profile-pic.svg"
            img.className = "rounded-circle --profile-pic"
            flexShrinkDiv.appendChild(img)

   /*
        <div class="flex-grow-1 ms-3">
        </div>
   */

        const secondParentDiv = document.createElement("div")
        secondParentDiv.className = "flex-grow-1 ms-3"
        parentDiv.appendChild(secondParentDiv)

   /*
            <p class="font-monospace align-self-center">This is in monospace</p>
   */

            const pTag = document.createElement("p")
            pTag.className = "font-monospace align-self-center fw-bold"
            pTag.textContent = `by ${authorName}` 
            pTag.style.fontSize = "16px"
            secondParentDiv.appendChild(pTag)

    return parentDiv
}