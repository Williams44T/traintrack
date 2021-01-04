import React from 'react';

var User = (props) => (<div>
  <img src={props.user.image} />
  <p>{props.user.name}</p>
</div>);

export default User;