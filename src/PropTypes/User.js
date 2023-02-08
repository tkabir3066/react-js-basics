import React from "react";

import PropTypes from "prop-types";

const User = (props) => {
  console.log(props.user);
  return (
    <div>
      <h4>{props.user.id}</h4>
      <h2>{props.user.name}</h2>
    </div>
  );
};

User.propTypes = {
  userName: PropTypes.string,
  userId: PropTypes.number,
};

User.defaultProps = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
};

export default User;
