import css from "./UserMainInfo.module.css";
import PropTypes from "prop-types";

const UserMainInfo = (props) => {
  const { avatar, username, tag, location } = props;
  return (
    <div className={css.description}>
      <img src={avatar} alt="User avatar" className={css.avatar} />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </div>
  );
};
export default UserMainInfo;
UserMainInfo.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
};
