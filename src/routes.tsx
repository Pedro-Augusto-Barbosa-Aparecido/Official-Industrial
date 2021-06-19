import React from 'react'

import {
    Routes,
    Route
} from 'react-router-dom'

import Home from './components/components/Home'
import CreateUser from './components/components/User/create'
import ListUser from './components/components/User/List'
import Debug from './components/debug/debug'

export default function MainRoute() {
    return (
        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/users' element={ <ListUser /> } />
            <Route path='/users/create' element={<CreateUser />} />
            <Route path='private/intern/view/debug/:data' element={<Debug />} />

            <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
    )

}
