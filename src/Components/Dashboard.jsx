import React from 'react'
import { Link } from 'react-router-dom';
import DashboardStatsGrid from './DashboardStatsGrid';
import TransactionChart from './TransactionChart';
import { BuyerProfile } from './BuyerProfile';
import RecentOrders from './RecentOrders';
import PopularProducts from './PopularProducts';

const Dashboard = () => {
  return (
    <div className='flex flex-col gap-4'>
      <DashboardStatsGrid/>
      <div className='flex flex-row gap-4 w-full'>
      <TransactionChart/>
      <BuyerProfile/>
      </div>
      <div className="flex flex-row gap-4 w-full">
          <RecentOrders/>
          <PopularProducts />
      </div>
    </div>
  )
}

export default Dashboard;