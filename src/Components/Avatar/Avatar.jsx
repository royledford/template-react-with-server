import classes from "./Avatar.module.css";
import cx from "classnames";
import PropTypes from "prop-types";
import { useMemo } from "react";

Avatar.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string.isRequired,
    profileImg: PropTypes.string,
  }),
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default function Avatar({ user, size = "small", style = {}, ...rest }) {
  const display = useMemo(() => {
    if (user.profileImg) {
      return (
        <img
          className={cx(classes.wrap, classes[`size--${size}`])}
          src={user.profileImg}
          alt={user.displayName}
          style={style}
        />
      );
    }

    return (
      <div className={cx(classes.wrap, classes[`size--${size}`])} style={style}>
        {user.displayName[0][0].toUpperCase()}
      </div>
    );
  }, [user]);

  return display;
}
