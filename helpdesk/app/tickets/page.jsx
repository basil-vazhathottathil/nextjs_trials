import React from 'react'
import TicketList from './TicketList'

const Ticket = () => {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p><small>Currently open tickets.</small></p>
        </div>
      </nav>


      <TicketList/>
    </main>
  )
}

export default Ticket
