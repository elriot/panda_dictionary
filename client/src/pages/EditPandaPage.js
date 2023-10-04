import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { editPanda, fetchPandaById, clearPandaState } from '../store/PandaRedux'; //
import { useNavigate, useParams } from 'react-router-dom';
import { CustomForm } from '../components/CustomForm';
import { address } from '../util/address';

export const EditPandaPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { id } = useParams();
    const message = useSelector(state => state.panda.message);
    const pandaDataFromStore = useSelector(state => state.panda.panda);

    const [formData, setFormData] = useState({
        name: '',
        birthday: '',
        imageUrl: '',
        address: '',
        personality: ''
    });

    useEffect(() => {
        dispatch(fetchPandaById(id));
    }, [id]);

    useEffect(() => {
        if (pandaDataFromStore) {
            setFormData(pandaDataFromStore);
        }
    }, [pandaDataFromStore]);


    useEffect(() => {
        if (message) {
            alert(message);
            dispatch(clearPandaState());
            navigate('/profile');
        }
    }, [navigate, message]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(id, formData);
        dispatch(editPanda(formData));
    };

    return (
        <div>
            <h1>Edit Profile</h1>
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
                <button type="submit">Update Profile</button>
            </CustomForm>
        </div>
    );
}

export default EditPandaPage;
