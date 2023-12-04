import React from 'react'
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
    <p>This is a Dashboard</p> <Link to="/product" className='underline'>go to products</Link>
    </div>
  )
}

export default Dashboard;