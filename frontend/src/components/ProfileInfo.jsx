import React from 'react'
import { getInitials } from '../utils/helper'

export const ProfileInfo = ({ userInfo, onLogout }) => {
  return (
    <div className='flex items-center gap-4'>
        <div className='w-12 h-12 flex justify-center items-center rounded-full text-slate-950 font-medium bg-slate-100'>
            {getInitials(userInfo?.fullName)}
        </div>

        <div>
            <p className='text-sm font-medium'>
            {userInfo?.fullName}
            </p>

            <button onClick={onLogout} className='text-slate-700 text=sm underline'>
                Logout
            </button>
        </div>
    </div>
  )
}
