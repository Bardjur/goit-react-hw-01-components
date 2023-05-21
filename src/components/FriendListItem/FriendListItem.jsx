import PropTypes from "prop-types";
import clsx from "clsx";
import css from './FriendList.module.css';

export const FriendListItem = ({avatar,name, status}) => (
  <li className={css.item}>
    <span className={clsx(css.status, {[css.active]: status})}></span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
  </li>
)

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  status: PropTypes.bool,
}
