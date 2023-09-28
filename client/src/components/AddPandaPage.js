import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { addPanda } from '../store/AddPandaRedux';

export const AddPandaPage = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.profile);

    const [formData, setFormData] = useState({
        name: '',
        birthday: '',
        imageUrl: '',
        address: '',
        personality: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch(addPanda(formData));
    };

    return (
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
    );
}

