import React, { useEffect, useState } from "react";
import classes from "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Spinner,
} from "reactstrap";
import FormContainer from "./containers/FormContainer";
import TableContainer from "./containers/TableContainer";

const App = () => {
  const [dataList, setDataList] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (dataList?.length > 0) {
      localStorage.setItem("DataList", JSON.stringify(dataList));
    }
  }, [dataList]);

  useEffect(() => {
    const dataInlocal = localStorage.getItem("DataList");
    if (dataInlocal) {
      setIsLoading(true);

      setTimeout(() => {
        setDataList(JSON.parse(dataInlocal));
        setIsLoading(false);
      }, 3000);
    }
  }, []);

  const onSubmidData = (data) => {
    setDataList([data, ...dataList]);
  };

  const handleDelete = (id) => {
    const updatedDataList = dataList.filter((data) => data.id !== id);
    setDataList(updatedDataList);

    const emailLocal = JSON.parse(localStorage.getItem("email")) || [];
    const updatedEmailList = emailLocal.filter(
      (email) => email !== dataList.find((data) => data.id === id).email
    );
    localStorage.setItem("email", JSON.stringify(updatedEmailList));

    if (updatedDataList.length === 0) {
      localStorage.removeItem("DataList");
    } else {
      localStorage.setItem("DataList", JSON.stringify(updatedDataList));
    }
  };
  const [editData, setEditData] = useState("");

  return (
    <div>
      <FormContainer onSubmidData={onSubmidData} />
      {isLoading ? (
        <Spinner>Loading...</Spinner>
      ) : (
        <TableContainer datalist={dataList} handleDelete={handleDelete} />
      )}
    </div>
  );
};

export default App;
