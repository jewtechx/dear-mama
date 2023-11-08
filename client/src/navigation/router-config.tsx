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
import Login from '../pages/auth/login'

import {
  DASHBOARD,
  MAIN_LAYOUT,
  LOGIN
} from "../constants/page-paths";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={MAIN_LAYOUT} element={<Layout />}>
           <Route path={DASHBOARD} element={<Dashboard />} />
           <Route path={LOGIN} element={<Login />} />
           
      </Route>
      

      <Route path="*" element={<NotFound />} />
    </>
  )
);

export default router;
