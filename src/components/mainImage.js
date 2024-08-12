export function mainImage(imageSrc, imageCaption) {
    /*
    <div class="d-flex justify-content-center">
    </div>
    */

    const parentDiv = document.createElement("div")
    parentDiv.className = "text-center"

    /*
        <figure class="figure">
        </figure>
    */

        const figure = document.createElement("figure")
        figure.className = "figure"
        parentDiv.appendChild(figure)

    /*
            <img src="https://images.pexels.com/photos/10135499/pexels-photo-10135499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            class="figure-img img-fluid rounded --main-image">
    */

            const img = document.createElement("img")
            img.src = imageSrc
            img.id = "mainImageEl"
            img.className = "figure-img text-center img-fluid rounded --main-image"
            figure.appendChild(img)

    /*
            <figcaption class="figure-caption">A caption for the above image.</figcaption>
    */

            const figcaption = document.createElement("figcaption")
            figcaption.className = "figure-caption"
            figcaption.textContent = imageCaption
            figcaption.style.fontSize = "16px"
            figure.appendChild(figcaption)

    return parentDiv
}

console.log()