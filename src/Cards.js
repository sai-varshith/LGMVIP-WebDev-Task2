import React from 'react';
import './Cards.css';
export default function Cards(props) {
  return (
    <>
      {props.userData.map((user, index) => {
        return (
          <div className='col-lg-4 col-md-6 mt-4 col-sm-8 col-xs-10 mx-auto'>
            <div className='userCard'>
              <img src={user.avatar} alt='' className='imgUser' />
              <div className='userCard-body'>
                <h3>
                  {user.first_name} {user.last_name}
                </h3>
                <p>{user.email}</p>
                <button className='btn-grad'>LGM USER</button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
