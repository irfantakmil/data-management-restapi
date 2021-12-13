import React,{useEffect} from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {showToast} from '../../utils/tools'
import {clearNotification} from '../../store/actions/index';

const Header = () => {
    const notifications = useSelector(state => state.notifications);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(notifications && notifications.error){
            const msg = notifications.msg ? notifications.msg : 'Error';
            showToast('ERROR',msg);
            dispatch(clearNotification());
        }
        if(notifications && notifications.success){
            const msg = notifications.msg ? notifications.msg : 'Success';
            showToast('SUCCESS',msg);
            dispatch(clearNotification());
        }
    },[notifications, dispatch])

    return (
        <nav className="navbar fixed-top">
            <Link to="/">
                <h1 className="navbar-brand">
                    Animals Management
                </h1>
            </Link>
        </nav>
    )
}

export default withRouter(Header);