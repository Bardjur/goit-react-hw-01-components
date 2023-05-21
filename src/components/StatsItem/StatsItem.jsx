import PropTypes from 'prop-types';
import css from './StatsItem.module.css'
import { getRandomHexColor } from "utils/getRandomHexColor";

export const StatsItem = ({ label, percentage }) => {
  return (
    <li className={css.item} style={{backgroundColor: getRandomHexColor()}}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  )
}

StatsItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
}