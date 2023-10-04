import { useEffect, useState, useMemo} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile, deletePandaById,clearPandaState} from "../store/PandaRedux";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import { Table } from "../components/Table";
import { Button } from "../components/Button";

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
      imageUrl: <img src={obj.imageUrl} alt="panda" width="140" height="100%" />,
      
      edit: <Button onClick={()=>{navigate(`/editPanda/${obj.id}`)}} text="Edit"/>,
      delete: <Button onClick={() => handleClickDelete(obj.id)} text="Delete"/>,
    }));
  }, [data]);
  
  useEffect(() => {
    dispatch(fetchProfile())
  }, [dispatch]);


  return (
    <div style={{paddingTop: "40px"}}>
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
