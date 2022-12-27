import css from "../Statistics/Statistics.module.css";
import { Container } from "../Container/Container";
import PropTypes from "prop-types";
import SectionTitle from "../SectionTitle/SectionTitle";
import StatList from "../StatList/StatList";
const Statistics = ({ title, stats }) => (
  <div>
    <Container>
      <section className={css.statistics}>
        {title && <SectionTitle title={title} />}
        <StatList stats={stats} />
      </section>
    </Container>
  </div>
);
export default Statistics;
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
