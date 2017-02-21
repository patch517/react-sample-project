import React from 'react';

class Users extends React.Component{
  render() {
    return(
      <div className='users'>
        <h4>Users: </h4>
        <ul>
            {
              this.props.users.map((user, i) => {
                return (
                  <li key={i}>
                    {user}
                  </li>
                );
              })
            }
        </ul>
      </div>
    )
  }
}