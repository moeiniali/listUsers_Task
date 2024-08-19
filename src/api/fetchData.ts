import axios from "axios";
const baseUrl: string = 'https://jsonplaceholder.typicode.com/';






export const fetchUserData = async () => {
 try {
  const response = await axios.get(`${baseUrl}/users`);
  return response.data;
 } catch (error) {
  console.error('خطا در دریافت اطلاعات', error);
 }
};



// fetch userdetails--------------------------------
export const fetchUserDetails = async (id:string | undefined) => {
 try {
  const response = await axios.get(`${baseUrl}/users/${id}`);
  return response.data;
 } catch (error) {
  console.error('خطا در دریافت اطلاعات', error);
 }
};
