const PageLink = (props) => {
  const { href, text, linkClass } = props;
  return (
    <li>
      <a href={href} className={linkClass}>
        {text}
      </a>
    </li>
  );
};

export default PageLink;
