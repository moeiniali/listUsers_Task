import React from 'react'
import { OrgUserLists } from '../ExAllCo';
import { Toaster } from 'react-hot-toast';
type Props = {}

const TmUserLists = (props: Props) => {
 return (
  <div className='w-full h-screen bg-white flex justify-center items-center'>
   <Toaster />
   <OrgUserLists />
  </div>
 )
}

export default TmUserLists;