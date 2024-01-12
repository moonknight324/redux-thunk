import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSelector, userThunk } from "../redux/Reducer";

const List = () => {
  const dispatch = useDispatch();
  const userData = useSelector(userSelector);
  const [fetchedData, setFetchedData] = useState(false);

  useEffect(() => {
    if (fetchedData) {
      dispatch(userThunk());
    }
  }, [fetchedData, dispatch]);

  const handleFetchData = () => {
    setFetchedData(true);
  };

  return (
    <div>
      <button onClick={handleFetchData}>Fetch Data</button>
      {userData.map((item, index) => (
        <div key={index}>
          <div>
            <h2>{item.name}</h2>
            <h3>{item.email}</h3>
          </div>
          <hr></hr>
        </div>
      ))}
    </div>
  );
};

export default List;
