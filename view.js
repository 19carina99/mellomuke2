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