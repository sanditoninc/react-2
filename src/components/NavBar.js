import logo from "../images/logo.svg";
import { pageLinks, socialLinks } from "./data";
import PageLink from "./PageLink";
import SocialLink from "./SocialLink";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <NavHeader />
        <NavPageLinks />
        <NavSocialLinks />
      </div>
    </nav>
  );
};

const NavHeader = () => {
  return (
    <div className="nav-header">
      <img src={logo} className="nav-logo" alt="backroads" />
      <button type="button" className="nav-toggle" id="nav-toggle">
        <i className="fas fa-bars"></i>
      </button>
    </div>
  );
};

const NavPageLinks = () => {
  return (
    <ul className="nav-links" id="nav-links">
      {pageLinks.map((link) => (
        <PageLink key={link.id} {...link} linkClass="nav-link" />
      ))}
    </ul>
  );
};

const NavSocialLinks = () => {
  return (
    <ul className="nav-icons">
      {socialLinks.map((link) => (
        <SocialLink key={link.id} {...link} iconClass="nav-icon" />
      ))}
    </ul>
  );
};

export default NavBar;
