/* eslint-disable react-refresh/only-export-components */
import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import NotFound from "../pages/404/NotFound";
import Layout from "../navigation/layout/main-layout";
import Dashboard from "../pages/dashboard/Dashboard";
import SignUp from '../pages/auth/login'

import {
  DASHBOARD,
  MAIN_LAYOUT,
  SIGNUP
} from "../constants/page-paths";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={MAIN_LAYOUT} element={<Layout />}>
           <Route path={DASHBOARD} element={<Dashboard />} />
           <Route path={SIGNUP} element={<SignUp />} />
           
      </Route>
      

      <Route path="*" element={<NotFound />} />
    </>
  )
);

export default router;
