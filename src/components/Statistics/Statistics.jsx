import { StatsItem } from 'components/StatsItem/StatsItem';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
  <section className={css.statistics}>
    {title && (<h2 className={css.title}>{title}</h2>)}

    <ul className={css['stat-list']}>
      {
        stats.map(({ id, label, percentage }) => (
          <StatsItem key={id} label={label} percentage={percentage} />
        ))
      }
    </ul>
  </section>
)}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
  })),
}
