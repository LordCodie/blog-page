export function docLists(articleTitle) {
    /*
            <div class="list-group">
            </div>
    */

        const groupParentDiv = document.createElement("div")
        groupParentDiv.className = "list-group"
    
    /*
                <div class="list-group-item list-group-item-action" aria-current="true">
                </div>
    */
        const listGroupItem = document.createElement("div")
        listGroupItem.className = "list-group-item list-group-item-action my-1" 
        listGroupItem.setAttribute("aria-current", "true")
        groupParentDiv.appendChild(listGroupItem)

    /*
                    <div class="d-flex w-100 justify-content-between">
                    </div>
    */

                    const dFlex = document.createElement("div")
                    dFlex.className = "d-flex w-100 justify-content-between"
                    listGroupItem.appendChild(dFlex)

        /*
                            <h5 class="mb-1">Article Title</h5>
        */

                            const mb1 = document.createElement("h5")
                            mb1.className = "mb-1"
                            // mb1.textContent = 
                            dFlex.appendChild(mb1)

        /*
                        <p class="mb-1">by Author Name and Surname</p>
        */

                        const pTag = document.createElement("p")
                        pTag.className = "mb-1"
                        pTag.textContent = articleTitle
                        listGroupItem.appendChild(pTag)

    return groupParentDiv                 
             
}