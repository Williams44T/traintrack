import React from 'react';
import $ from 'jquery';

var User = (props) => {
  var logout = () => {
    console.log('testing')
    $.post('/logout', {session: props.user.session}, () => window.location.assign('/'))
  }

  return <div>
    <img src={props.user.image} />
    <p>{props.user.username}</p>
    <button onClick={logout}>Logout</button>
  </div>;
}

export default User;