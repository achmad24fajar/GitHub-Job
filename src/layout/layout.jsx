import React, { useEffect } from 'react'
import { BodySection, Brand, ButtonLogout, HeaderSection, LayoutContainer } from './layout.styles'
import { Route, Routes, useLocation } from 'react-router-dom'
import Login from '../pages/Login/Login.pages'
import Jobs from '../pages/Jobs/Jobs.pages'
import { auth, signOutUser } from '../utils/firebase.utils'
import { useDispatch, useSelector } from 'react-redux'
import { LogoutUser, setState } from '../redux/jobs'
import Detail from '../pages/Detail/Detail.pages'

const Layout = () => {
  const {pathname} = useLocation();
  const dispatch = useDispatch();

  console.log(auth);
  
  return (
    <LayoutContainer>
        <HeaderSection>
            <Brand>Github Jobs</Brand>
            {pathname !== '/' && (
              <ButtonLogout onClick={() => dispatch(LogoutUser())}>Logout</ButtonLogout>
            )}
        </HeaderSection>
        <BodySection>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="/job/detail/:id" element={<Detail />} />
            </Routes>
        </BodySection>
    </LayoutContainer>
  )
}

export default Layout