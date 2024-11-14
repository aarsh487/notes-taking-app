import React, { useState } from 'react'
import { ProfileInfo } from './ProfileInfo'
import { SearchBar } from './SearchBar'
import { useNavigate } from 'react-router-dom'

export const Navbar = ({ userInfo, onSearchNote, handleClearSearch }) => {

    const [searchQuery, setSearchQuery ] = useState('')

    const navigate = useNavigate()

    const onLogout = () => {
        localStorage.clear()
        navigate('/login')
    }

    const handleSearch = () => {
        if(searchQuery){
            onSearchNote(searchQuery)
        }
    }

    const onClearSearch = () => {
        setSearchQuery("")
        handleClearSearch()
    }

  return (
    <div className='bg-white flex items-center justify-between px-6 py-2 drop-shadow'>
        <h2 className='tex-xl font-medium py-2 text-black'>Notes</h2>

        <SearchBar
            value={searchQuery}
            onChange={({ target }) => {
                setSearchQuery(target.value)
            }}

            handleSearch={handleSearch}
            onClearSearch={onClearSearch}>
        </SearchBar>

        <ProfileInfo userInfo={userInfo} onLogout={onLogout} />

    </div>
  )
}