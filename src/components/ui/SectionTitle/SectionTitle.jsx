import './SectionTitle.scss';

const SectionTitle = ({ title, subtitle, align = 'center' }) => {
  return (
    <div className={`section-title section-title--${align}`}>
      {subtitle && <span className="section-title__subtitle">{subtitle}</span>}
      {title && <h2 className="section-title__title">{title}</h2>}
      <div className="section-title__line" />
    </div>
  );
};

export default SectionTitle;
