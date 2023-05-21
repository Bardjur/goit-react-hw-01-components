import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({friends}) => (
  <ul className={css['friend-list']}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <FriendListItem
        key={id}
        avatar={avatar}
        name={name}
        status={isOnline}
      />
    ))}
  </ul>
)

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number,
    }
  )),
}