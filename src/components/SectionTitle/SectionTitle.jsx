import css from "../SectionTitle/SectionTitle.module.css";
import PropTypes from "prop-types";

const SectionTitle = ({ title }) => {
  return <h2 className={css.title}>{title}</h2>;
};
export default SectionTitle;
SectionTitle.propTypes = {
  title: PropTypes.string,
};
