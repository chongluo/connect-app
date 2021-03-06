/**
 * Message to show when there is no notifications
 */
import React from 'react'
import PropTypes from 'prop-types'
import './NotificationsEmpty.scss'
import Bell from '../../assets/icons/ui-bell.svg'



const NotificationsEmpty = (props) => (
  <div className="notifications-empty">
    <div className="icon">
      <Bell className="icon-ui-bell"/>
    </div>
    <p className="message">Good job! You’re all caught up</p>
    {props.children && <div className="additional-content">{props.children}</div>}
  </div>
)

NotificationsEmpty.propTypes = {
  children: PropTypes.node
}

export default NotificationsEmpty
