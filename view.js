const main = document.getElementById('main');

function getHeader() {
    return /*HTML*/`
    <header>
        <nav>
            <button onclick="showHome();">Home</button>
        </nav>
    </header>
    `;
}

function showHome() {
    main.innerHTML = /*HTML*/`
    ${getHeader()}
    <h1>Film informasjon!</h1>
    <nav>
    <section>
        <figure>
        <nav>
            <img src="${model.images.mammamia}" alt="mamma-mia" height="150px" width="100px" onclick="mammamia();">
            <figcaption>Mamma Mia!</figcaption>
        </nav>
        </figure>        
    </section>
    <section>
        <figure>
        <nav>
            <img src="" onclick="">
            <figcaption>Harry Potter</figcaption>
        </nav>
        </figure>        
    </section>
    <section>
        <figure>
        <nav>
            <img src="" onclick="">
            <figcaption>Lord Of The Rings</figcaption>
        </nav>
        </figure>        
    </section>
    <section>
        <figure>
        <nav>
            <img src="" onclick="">
            <figcaption>The Hobbit</figcaption>
        </nav>
        </figure>        
    </section>
    </nav>
    ${getFooter()}
    `;
}

function mammamia() {
    main.innerHTML = /*HTML*/`
    ${getHeader()}
    ${getFooter()}
    `;
}

showHome();

function getFooter() {
    return /*HTML*/`
    <footer>
        <p>&copy; CBM 2022
    </footer>
    `;
}