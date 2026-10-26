// <site-nav> — shared navigation bar.
// Renders into the light DOM (no shadow root) so the existing `nav` rules in style.css keep applying.
class SiteNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav>
        <section>
          <a href="index.html" class="logo-link"><img src="assets/images/gourmap.svg" alt="logo" class="logo"></a>
          <div class="menu" id="menu">
            <a href="features.html">Features</a>
            <a href="faq.html">FAQ</a>
            <a href="support.html">Support</a>
            <button class="mobile-only"><img src="assets/icons/apple.svg" alt="apple-logo"> Get the app soon</button>
          </div>
          <button><img src="assets/icons/apple.svg" alt="apple-logo"> Get the app soon</button>
          <a href="javascript:void(0);" class="menu-icon" onclick="myFunction()">
            <span></span>
            <span></span>
          </a>
        </section>
      </nav>
    `;

    // Highlight the link for the current page.
    const page = location.pathname.split("/").pop().replace(/\.html$/, "");
    this.querySelectorAll(".menu a").forEach((a) => {
      if (a.getAttribute("href").replace(/\.html$/, "") === page) {
        a.setAttribute("aria-current", "page");
      }
    });
  }
}

function myFunction() {
  var x = document.getElementById("menu");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

customElements.define("site-nav", SiteNav);
