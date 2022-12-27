import css from "../StatList/StatList.module.css";
import clsx from "clsx";
import PropTypes from "prop-types";

const StatList = (props) => {
  const list = props.stats.map((el) => {
    const variant = el.id.replace("-", "");
    return (
      <li key={el.id} className={clsx(css.item, css[variant])}>
        <span className={css.label}>{el.label}</span>
        <span className={css.percentage}>{el.percentage}%</span>
      </li>
    );
  });
  return <ul className={css.statList}>{list}</ul>;
};
export default StatList;
StatList.propTypes = {
  props: PropTypes.object,
};
