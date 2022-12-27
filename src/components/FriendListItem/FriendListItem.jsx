import clsx from "clsx";
import PropTypes from "prop-types";
import css from "../FriendList/FriendList.module.css";
const FriendListItem = ({ friend }) => {
  const userStatusClass = clsx(css.status, friend.isOnline && css.online);
  return (
    <li className={css.item}>
      <span className={userStatusClass}></span>
      <img
        className="avatar"
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{friend.name}</p>
    </li>
  );
};
export default FriendListItem;
FriendListItem.propTypes = {
  friend: PropTypes.object,
};
