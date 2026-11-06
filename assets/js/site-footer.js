// <site-footer> — shared footer.
// Renders into the light DOM (no shadow root) so the existing `footer` rules in style.css keep applying.
class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <section>
            <a href="https://x.com/getgourmap" target="_blank"><img src="assets/icons/x.svg" alt="x" style="width: 20px;"></a>
            <a href="https://bsky.app/profile/gourmap.bsky.social" target="_blank"><img src="assets/icons/bluesky.svg" alt="bluesky" style="width: 20px;"></a>
            <a href="https://www.tiktok.com/@getgourmap" target="_blank"><img src="assets/icons/tiktok.svg" alt="tiktok" style="width: 20px;"></a>
            <a href="https://www.instagram.com/getgourmap/" target="_blank"><img src="assets/icons/instagram.svg" alt="instagram" style="width: 20px;"></a>
            <a href="https://www.threads.com/@getgourmap" target="_blank"><img src="assets/icons/threads.svg" alt="threads" style="width: 20px;"></a>
            <a href="https://www.youtube.com/@getgourmap" target="_blank"><img src="assets/icons/youtube.svg" alt="youtube" style="width: 20px;"></a>
            <a href="https://www.linkedin.com/company/gourmap" target="_blank"><img src="assets/icons/linkedin.svg" alt="linkedin" style="width: 20px;"></a>
            <a href="mailto:info@gourmap.app"><img src="assets/icons/envelope.svg" alt="email" style="width: 20px;"></a>
          </section>
          <section>
            <p><a href="terms.html">Terms</a> & <a href="privacy.html">Privacy</a></p>
            <a href="faq.html">FAQ</a>
            <p style="opacity: 0.5">Gourmap © ${new Date().getFullYear()}</p>
        </section>
      </footer>
    `;
  }
}

customElements.define("site-footer", SiteFooter);
