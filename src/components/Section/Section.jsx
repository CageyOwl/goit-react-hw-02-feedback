import PropTypes from 'prop-types';

export default function Section({ title, children = null }) {
  return (
    <section className="section-component">
      {title && <h2 className="section-component__title">{title}</h2>}
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};
