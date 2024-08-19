
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';


type Props = {}

const Loading = (props: Props) => {

 return (
  <div className='w-screen h-screen m-auto flex  justify-center items-center content-center'>
   <CircularProgress disableShrink />
  </div>
 )
}

export default Loading;
