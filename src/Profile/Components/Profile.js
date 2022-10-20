import React from 'react'
import PropTypes from 'prop-types';


  function Profile(props) {
    function handleName() {
      alert(props.fullName);
    }
  return (
    <>
    <div>{props.children}</div>
    <div>
      <h1>{props.fullName}</h1>
      <p>{props.bio}</p>
      
      <h4>{props.profession}</h4>
    </div>
    <button onClick={handleName}>Alert</button>
  </>
);
}

Profile.propTypes = {
fullName: PropTypes.string,
bio: PropTypes.string,
profession: PropTypes.string,
};
    <div>Profile</div>
  


export default Profile