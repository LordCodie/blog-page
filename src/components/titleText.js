export function titleText(importedTitle) {
    /*
    <div>
    </div>
    */

    const parentDiv = document.createElement("div")
    parentDiv.className = ""

    /*
        <div class="row p-5">
        </div>
    */

        const rowDiv = document.createElement("div")
        rowDiv.className = "row p-4"
        parentDiv.appendChild(rowDiv)

    /*
            <div class="col-sm-10">
            </div>
    */

            const colDiv = document.createElement("div")
            colDiv.className = "col-sm-12"
            rowDiv.appendChild(colDiv)

    /*
                <input type="email" class="form-control form-control-lg" id="colFormLabelLg" placeholder="col-form-label-lg">
    */

                const title = document.createElement("p")
                title.className = "display-5 text-center fw-semibold --title-input-block"
                title.id = "titleText"
                title.textContent = importedTitle
                colDiv.appendChild(title)



    return parentDiv
}

console.log()