export function textArea(mainText) {
    /*
    <div class="p-5">
    </div>
    */

    const parentDiv = document.createElement("div")
    parentDiv.className = "px-5 py-1"

    /*
        <textarea class="form-control form-control-lg textarea-block" type="text" 
            placeholder=".form-control-lg" aria-label=".form-control-lg example">
        </textarea>
    */
   const textArea = document.createElement("p") 
   textArea.id = "mainArticleText"
   textArea.className = ""
   textArea.innerHTML = mainText
   parentDiv.appendChild(textArea)

    return parentDiv
}