import { Container } from "../Container/Container";
import UserMainInfo from "../UserMainInfo/UserMainInfo";
import UserStats from "../UserStats/UserStats";
import PropTypes from "prop-types";
import { ProfileDiv } from "./Profile.styled";
const Profile = ({ username, tag, location, avatar, stats }) => (
  <div>
    <Container>
      <ProfileDiv>
        <UserMainInfo
          username={username}
          tag={tag}
          location={location}
          avatar={avatar}
        />
        <UserStats
          followers={stats.followers}
          views={stats.views}
          likes={stats.views}
        />
      </ProfileDiv>
    </Container>
  </div>
);

export default Profile;
Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};
