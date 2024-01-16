import classes from "./UserCard.module.css";
import cx from "classnames";
import PropTypes from "prop-types";
import Avatar from "../Avatar/Avatar";

UserCard.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string.isRequired,
    profileImg: PropTypes.string,
  }),
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default function UserCard({ user, size = "small" }) {
  return (
    <div className={cx(classes.wrap, classes[`size--${size}`])}>
      <Avatar user={user} size={size} style={{ marginRight: 8 }} />
      <div className={cx(classes.info, { [classes.center]: size !== "large" })}>
        <div className={classes.name}>{user.displayName}</div>
        {size === "large" && <div className={classes.email}>{user.email}</div>}
      </div>
    </div>
  );
}
