import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useQuery } from '@tanstack/react-query';
import { fetchUserDetails } from '../../api/fetchData';
import { useParams } from 'react-router-dom';
import { Loading } from '../ExAllCo';
interface elemTypes {
 name?: string;
 email?: string;
 phone?: string;
 website?: string;
 id?: string | undefined;
 elem?: elemTypes | null
}


type UserTypes = {
 name?: string;
 email?: string;
 phone?: string;
 website?: string;
 id?: string | undefined;
 elem?: elemTypes | null;
 [item: string]: any
};

type Props = {

}


// Convert nested object to flat key-value pairs
const flattenObject = (obj: any, prefix: string = ''): { [key: string]: any } => {
 let items: { [key: string]: any } = {};
 for (const [key, value] of Object.entries(obj)) {
  if (typeof value === 'object' && value !== null) {
   if (Array.isArray(value)) {
    items = { ...items, ...flattenObject(value, `${prefix}${key}.`) };
   } else {
    items = { ...items, ...flattenObject(value, `${prefix}${key}.`) };
   }
  } else {
   items[`${prefix}${key}`] = value;
  }
 }
 return items;
};




const OrgUserDetails: React.FC<Props> = () => {

 const { userId } = useParams<{ userId: string }>();


 const { isPending, isError, data, error } = useQuery<UserTypes>({
  queryKey: ['users'],
  queryFn: () => fetchUserDetails(userId),
 })






 if (isPending) {
  return <Loading />;
 }

 if (isError) {
  return <span>Error: {error.message}</span>;
 }
 if (!data) {
  return <span>هیج داده ای وجود ندارد.</span>;
 }



 const flatData = flattenObject(data);





 return (
  <div>
   <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="user details table">
     <TableHead>
      <TableRow>
       <TableCell align="center" className='bg-sky-100'>user Information</TableCell>
       <TableCell align="center" className='bg-sky-100'> </TableCell>
      </TableRow>
     </TableHead>
     <TableBody>
      {Object.entries(flatData).map(([key, value]) => (
       <TableRow key={key}>
        <TableCell align="center">{key}</TableCell>
        <TableCell align="center">{JSON.stringify(value)}</TableCell>
       </TableRow>
      ))}
     </TableBody>
    </Table>
   </TableContainer>





  </div>
 )
}

export default OrgUserDetails;





