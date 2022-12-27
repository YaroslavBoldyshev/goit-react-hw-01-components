import PropTypes from "prop-types";
import { Container } from "../Container/Container";
import css from "../FriendList/FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";
const FriendList = ({ friends }) => {
  return (
    <section className="statistics">
      <Container>
        <ul className={css.friendList}>
          {friends.map((el) => (
            <FriendListItem key={el.id} friend={el} />
          ))}
        </ul>
      </Container>
    </section>
  );
};
export default FriendList;
FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};
