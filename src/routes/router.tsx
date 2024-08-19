import { createHashRouter } from "react-router-dom";
import { UserPages, TmUserLists } from "../components/ExAllCo";
import { OrgUserDetails } from "../components/ExAllCo";

export const router = createHashRouter([
 {
  path: '/',
  element: <UserPages />,
  children: [
   { index: true, element: <TmUserLists /> },
   { path: '/users/:userId', element: <OrgUserDetails /> }
  ]
 },

])