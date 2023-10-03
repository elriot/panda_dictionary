import { useEffect, useState, useMemo} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile, deletePandaById,clearPandaState} from "../store/PandaRedux";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import { Table } from "../components/Table";

export const ProfilePage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.panda.profile);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPandaId, setSelectedPandaId] = useState(null);
  const navigate = useNavigate();

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleConfirm = () => {
    setIsModalVisible(false);
    dispatch(deletePandaById(selectedPandaId))
      .then((res) => {
        dispatch(clearPandaState());
        dispatch(fetchProfile());
      })
      .catch((err) => console.log(err));
  };
  const handleClickDelete = (id) => {
    console.log("handle, clicke delete", id);
    setSelectedPandaId(id);
    setIsModalVisible(true);
  };

  const columnData = useMemo(() => {
    if (data.length > 0) {
      return [...Object.keys(data[0]), "edit", "delete"];
    }
    return [];
  }, [data]);
  
  const tableData = useMemo(() => {
    return data.map((obj) => ({
      ...obj,
      imageUrl: <img src={obj.imageUrl} alt="panda" width="100" />,
      edit: <Link to={`/editPanda/${obj.id}`}>Edit</Link>,
      delete: <button onClick={() => handleClickDelete(obj.id)}>Delete</button>,
    }));
  }, [data]);
  
  useEffect(() => {
    dispatch(fetchProfile())
  }, [dispatch]);


  return (
    <div>
      {data && data.length > 0 ? (
        <div>
          <Modal
            isVisible={isModalVisible}
            onClose={handleCloseModal}
            onConfirm={handleConfirm}
          >
            <p>are you sure to delete? {selectedPandaId}</p>
          </Modal>
          <Table data={tableData} column={columnData} errMsg="no data" />
        </div>
      ) : (
        <p>No Data from server.</p>
      )}
    </div>
  );
};
