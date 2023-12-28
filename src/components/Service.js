const Service = (props) => {
  const { service, icon, desc } = props;
  return (
    <article className="service">
      <span className="service-icon">
        <i className={icon}></i>
      </span>
      <div className="service-info">
        <h4 className="service-title">{service}</h4>
        <p className="service-text">{desc}</p>
      </div>
    </article>
  );
};
export default Service;
