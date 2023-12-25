import App from "../../../App";
import Login from "../../layouts/Header/Login/Login";
import Register from '../../layouts/Header/Register/Register';
import Bank from '../../layouts/Bank/Bank';
import HistorySource from "../../layouts/HistorySource/HistorySource";
import DetailSource from "../../layouts/Main/DetailSource/DetailSource";

import { useSelector } from 'react-redux';

import { Navigate, Outlet } from 'react-router-dom'

export const publicRoutes = [
    {path : '/' , component : App},
    {path : '/login' , component : Login},
    {path : '/reg' , component : Register},
    {path : '/bank' , component : Bank},
    {path : '/history' , component : HistorySource},
    {path : '/sources/:slug' , component : DetailSource},
]


export const PrivateRoutes = () => {
    const nameUser = useSelector((state) => state.auth.login?.currentUser);

    const isAuth = nameUser?.admin
    return isAuth  ? <Outlet /> : <Navigate to='/admin' />

}
