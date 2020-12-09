import React from 'react'
import { Switch, Link, Route, useRouteMatch } from 'react-router-dom'

import Inbox from './Inbox'

const InboxList = ({ emails }) => {
  const match = useRouteMatch()

  const InboxList = emails.map(email => {
    return (
      <li>
        <Link to={`${ match.url }/${email.id}`}>  Subject: {email.subject}  From: {email.sender} </Link>
      </li>
    )
  })

  return(
    <>
      <h3>Inbox</h3>
      <ul>{
            emails.length > 0 ?
              InboxList
              :
              <p>Empty</p>
          }</ul>
      <Switch>
        <Route exact path={`${match.url}/:emailId`}>
          <Inbox data={emails} />
        </Route>
        <Route>
          <p>Dont forget to donate to my cash app</p>
        </Route>
      </Switch>
    </>
  )
}

export default InboxList