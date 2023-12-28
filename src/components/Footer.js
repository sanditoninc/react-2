import { pageLinks, socialLinks } from "./data";
import SocialLink from "./SocialLink";
import PageLink from "./PageLink";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((pageLink) => (
          <PageLink key={pageLink.id} {...pageLink} linkClass="footer-link" />
        ))}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((socialLink) => (
          <SocialLink
            key={socialLink.id}
            {...socialLink}
            iconClass="footer-icon"
          />
        ))}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
