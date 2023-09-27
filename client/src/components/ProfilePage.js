import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchProfile } from '../store/ProfileRedux';

export const ProfilePage = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.profile);

    useEffect(() => {
        dispatch(fetchProfile());
    },[dispatch]);

    return <div>
        { data && <p>from server : {data.message} </p>}
        { !data  && <p>No Data from server. good job</p> }
    </div>
}
