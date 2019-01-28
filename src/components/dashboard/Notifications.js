import React from 'react'
import moment from 'moment'

const Notifications = (props) => {
  const { _notifications } = props
  return (
    <div className='section'>
      <div className='card z-depth-0'>
        <div className='card-content'>
          <span className='card-title'>Notifications</span>
          <ul className='notifications'>
            { _notifications && _notifications.map(notification => {
              return (
                <li key={notification.id}>
                  <span className='pink-text'>{notification.user} </span>
                  <span>{notification.content}</span>
                  <div className='grey-text note-data'>
                    {moment(notification.time.toDate()).fromNow()}
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Notifications


// Next: headon to firebase console database>>Rules to set security rules for our notifications collections ... allow read access if someone is logged in