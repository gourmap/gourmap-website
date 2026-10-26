// <site-footer> — shared footer.
// Renders into the light DOM (no shadow root) so the existing `footer` rules in style.css keep applying.
class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <div class="top">
          <button style="cursor: not-allowed; opacity: 0.3;"><img src="assets/icons/apple.svg" alt="apple-logo"> Get the app soon</button>
          <div class="socials">
            <a href="https://x.com/getgourmap" target="_blank"><img src="assets/icons/x.svg" alt="x"></a>
            <a href="https://bsky.app/profile/gourmap.bsky.social" target="_blank"><img src="assets/icons/bluesky.svg" alt="bluesky"></a>
            <a href="https://www.tiktok.com/@getgourmap" target="_blank"><img src="assets/icons/tiktok.svg" alt="tiktok"></a>
            <a href="https://www.instagram.com/getgourmap/" target="_blank"><img src="assets/icons/instagram.svg" alt="instagram"></a>
            <a href="https://www.threads.com/@getgourmap" target="_blank"><img src="assets/icons/threads.svg" alt="threads"></a>
            <a href="https://www.youtube.com/@getgourmap" target="_blank"><img src="assets/icons/youtube.svg" alt="youtube"></a>
            <a href="https://www.linkedin.com/company/gourmap" target="_blank"><img src="assets/icons/linkedin.svg" alt="linkedin"></a>
          </div>
        </div>
        <hr>
        <div class="bottom">
          <p>Gourmap © ${new Date().getFullYear()}</p>
          <div class="links">
            <a href="privacy.html">Privacy Policy</a>
            <a href="terms.html">Terms of Service</a>
            <a href="mailto:info@gourmap.app">Contact</a>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define("site-footer", SiteFooter);
