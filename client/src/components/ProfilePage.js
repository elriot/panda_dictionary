import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile } from '../store/PandaRedux';
import { Link } from 'react-router-dom';

export const ProfilePage = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.panda.profile); // 'fetchProfile'를 'panda.profile'로 수정
    // console.log(data);
    useEffect(() => {
        dispatch(fetchProfile());
    }, []);
    return (
        <div>
            {data && data.length > 0 ? (
                <table border="1">
                    <thead>
                        <tr>
                            {Object.keys(data[0]).map(key => {
                                return <th key={key}>{key}</th>;
                            })}
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, idx) => (
                            <tr key={idx}>
                                {Object.entries(row).map(([key, value]) => {
                                    if (key === "imageUrl") {
                                        return (
                                            <td key={key}>
                                                <img src={value} alt="Panda" width="100" />
                                            </td>
                                        );
                                    }
                                    return <td key={key}>{value}</td>;
                                })}
                                <td><Link to={`/editPanda/${row.id}`}>Edit</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No Data from server. good job</p>
            )}
        </div>
    );
}
