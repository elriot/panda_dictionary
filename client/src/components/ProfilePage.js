import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile,deletePandaById, clearPandaState } from "../store/PandaRedux";
import { Link, useNavigate } from "react-router-dom";
import Modal from "./Modal";

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
		.then(res=>{
			dispatch(clearPandaState());
			dispatch(fetchProfile());
		})
		.catch(err=>console.log(err));
  };

  useEffect(() => {
    dispatch(fetchProfile());
  }, []);
  return (
    <div>
      {data && data.length > 0 ? (
        <table border="1">
          <thead>
            <tr>
              {Object.keys(data[0]).map((key) => {
                return <th key={key}>{key}</th>;
              })}
              <th>Edit</th>
              <th>Delete</th>
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
                <td>
                  <Link to={`/editPanda/${row.id}`}>Edit</Link>
                </td>
                <td>
                  <button
                    onClick={() => {
                      setSelectedPandaId(row.id);
                      setIsModalVisible(true);
                    }}
                  >
                    Delete
                  </button>
                  <Modal
                    isVisible={isModalVisible}
                    onClose={handleCloseModal}
                    onConfirm={handleConfirm}
                  >
                    <p>are you sure to delete? {selectedPandaId}</p>
                  </Modal>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No Data from server. good job</p>
      )}
    </div>
  );
};
