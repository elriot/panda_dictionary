import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { editPanda, fetchPandaById } from '../store/PandaRedux'; //
import { useNavigate, useParams } from 'react-router-dom';

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
            <button type="submit">Update Profile</button>
        </form>
    );
}

export default EditPandaPage;
