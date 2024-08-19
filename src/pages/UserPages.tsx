import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const UserPages: React.FC = (props: Props) => {
 return (
  <Outlet />
 )
}

export default UserPages