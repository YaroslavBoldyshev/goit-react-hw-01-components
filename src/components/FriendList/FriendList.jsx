import PropTypes from "prop-types";
import { Container } from "../Container/Container";
import clsx from "clsx";
import css from "../FriendList/FriendList.module.css";

const FriendList = ({ friends }) => {
  const list = friends.map((el) => {
    const className = clsx(css.status, el.isOnline && css.online);
    return (
      <li key={el.id} className={css.item}>
        <span className={className}></span>
        <img className="avatar" src={el.avatar} alt="User avatar" width="48" />
        <p className="name">{el.name}</p>
      </li>
    );
  });
  return (
    <section className="statistics">
      <Container>
        <ul className={css.friendList}>{list}</ul>
      </Container>
    </section>
  );
};
export default FriendList;
FriendList.propTypes = {
  friends: PropTypes.array,
};
