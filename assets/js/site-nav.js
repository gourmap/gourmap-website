// <site-nav> — shared navigation bar.
// Renders into the light DOM (no shadow root) so the existing `nav` rules in style.css keep applying.
class SiteNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav>
        <a href="index.html"><img src="assets/images/appicon.png" alt="" style="height: 40px;"><img src="assets/images/gourmap.svg" alt="logo" style="height: 32px;"></a>
      </nav>
    `;
  }
}

customElements.define("site-nav", SiteNav);
