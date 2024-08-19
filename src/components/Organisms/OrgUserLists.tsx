import React from 'react';
import { fetchUserData } from '../../api/fetchData';
import { useQuery } from '@tanstack/react-query';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../ExAllCo';


type Props = {}
type User = {
  name: string;
  email: string;
  phone: string;
  id: string;
};
const OrgUserLists = (props: Props) => {
  const navigate = useNavigate()


  const { isPending, isError, data, error, refetch } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: fetchUserData,
    refetchOnWindowFocus: true,
  })

  const handleRowClick = (user: User) => {
    navigate(`/users/${user.id}`);
  };


  React.useEffect(() => {
    refetch();
  }, [refetch]);



  if (isPending) {
    return <Loading />;
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }
  if (!data || !Array.isArray(data)) {
    return <span>No data found</span>;
  }







  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" >
          <TableHead>
            <TableRow>
              <TableCell align="center">name</TableCell>
              <TableCell align="center">email</TableCell>
            </TableRow>

          </TableHead>
          <TableBody>
            {data && data?.map((user) => (
              <TableRow
                key={user.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                onClick={() => handleRowClick(user)}
              >
                <TableCell component="th" scope="row" align="center" className='hover:scale-95 hover:bg-slate-100 rounded-lg cursor-pointer'> {user.name}</TableCell>
                <TableCell component="th" scope="row" align="center" className='hover:scale-95 hover:bg-slate-100 rounded-lg cursor-pointer'>{user.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>





    </div>
  )
}

export default OrgUserLists