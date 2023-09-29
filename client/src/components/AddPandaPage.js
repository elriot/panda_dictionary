import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { addPanda } from '../store/PandaRedux';
import { useNavigate } from 'react-router-dom';

export const AddPandaPage = () => {
    const dispatch = useDispatch();
    const message = useSelector(state => state.panda.message);
    const addedPanda = useSelector(state=> state.panda.panda);
    const navigate = useNavigate(); 

    const [formData, setFormData] = useState({
        name: '',
        birthday: '',
        imageUrl: '',
        address: '',
        personality: ''
    });

    useEffect(() => {
        if (message) {
            alert(message);  // 메시지를 alert로 띄워줍니다
        }
        if (addedPanda) {
            navigate('/');
        }
    }, [message, addedPanda, navigate]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch(addPanda(formData));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Birthday:
                    <input type="date" name="birthday" value={formData.birthday} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Image URL:
                    <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Address:
                    <input type="text" name="address" value={formData.address} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Personality:
                    <input type="text" name="personality" value={formData.personality} onChange={handleChange} required />
                </label>
                <br />
                <button type="submit">Add Profile</button>
            </form>
            {/* {message && <div>{message}</div>}
            {addedPanda && <div>{JSON.stringify(addedPanda)}</div>} */}
        </div>
        
    );
}

