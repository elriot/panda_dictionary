import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { addPanda } from '../store/PandaRedux';
import { useNavigate } from 'react-router-dom';
import { clearPandaState } from '../store/PandaRedux';
import { CustomForm } from '../components/CustomForm';
import { address } from '../util/address';

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
            dispatch(clearPandaState());
            navigate('/profile');
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
            <h1> Add Panda Profile</h1>
            <CustomForm onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
                <label>
                    Birthday:
                    <input type="date" name="birthday" value={formData.birthday} onChange={handleChange} required />
                </label>
                <label>
                    Image URL:
                    <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} required />
                </label>
                <label>
                    Address:
                    <select name="address" value={formData.address} onChange={handleChange} required>
                        {address.map((address, index) => (
                            <option key={index} value={address}>
                                {address}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    Personality:
                    <input type="text" name="personality" value={formData.personality} onChange={handleChange} required />
                </label>
                <button type="submit">Create Profile</button>
            </CustomForm>
        </div>
        
    );
}

