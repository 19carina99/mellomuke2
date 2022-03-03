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
            <img src="${model.images.mammamia}" alt="mammamia" height="150px" width="100px" onclick="mammamia();">
            <figcaption>Mamma Mia!</figcaption>
        </nav>
        </figure>        
    </section>
    <section>
        <figure>
        <nav>
            <img src="${model.images.harrypotter}" alt="harrypotter" height="150px" width="100px" onclick="hp();">
            <figcaption>Harry Potter</figcaption>
        </nav>
        </figure>        
    </section>
    <section>
        <figure>
        <nav>
            <img src="${model.images.lotr}" alt="lotr" height="150px" width="150px" onclick="lotr();">
            <figcaption>Lord Of The Rings</figcaption>
        </nav>
        </figure>        
    </section>
    <section>
        <figure>
        <nav>
            <img src="${model.images.thehobbit}" alt="thehobbit" height="150px" width="350px" onclick="thehobbit();">
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
    <h1>Mamma Mia!</h1>
        <img src="${model.images.mammamia}" height="350px" width="250px">
    ${getFooter()}
    `;
}

function hp() {
    main.innerHTML = /*HTML*/`
    ${getHeader()}
    ${getFooter()}
    `;
}

function lotr() {
    main.innerHTML = /*HTML*/`
    ${getHeader()}
    ${getFooter()}
    `;
}

function thehobbit() {
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