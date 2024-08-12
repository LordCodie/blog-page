export function navbar() {
    /*
    <nav class="navbar bg-body-tertiary shadow-sm">
    </nav>
    */

    const navBar = document.createElement("nav")
    navBar.className = "navbar bg-body-tertiary shadow-sm"

    /*
        <div class="container-fluid">
        </div>
    */

        const containerFluid = document.createElement("div")
        containerFluid.className = "container-fluid"
        navBar.appendChild(containerFluid)

    /*
            <span class="navbar-brand mb-0 h1 logo-box-- p-1">Blog CMS</span>
    */

            const span = document.createElement("span")
            span.className = "navbar-brand mb-0 h1 logo-box-- p-2"
            span.textContent = "Blog.com"
            containerFluid.appendChild(span)

    return navBar
}

console.log()