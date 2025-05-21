
// Chargement des composants du header et du footer
class HeaderComponent extends HTMLElement {
    connectedCallback() {
        fetch('include/header.html')
            .then(response => response.text())
            .then(data => {
                this.innerHTML = data;
            });
    }
}
customElements.define('custom-header', HeaderComponent);

class FooterComponent extends HTMLElement {
    connectedCallback() {
        fetch('include/footer.html')
            .then(response => response.text())
            .then(data => {
                this.innerHTML = data;
            });
    }
}
customElements.define('footer-container', FooterComponent);





