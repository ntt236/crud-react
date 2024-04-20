import React from "react";
import { Button, Table } from "reactstrap";

const TableContainer = ({ datalist, handleDelete }) => {
  return (
    <Table hover>
      <thead>
        <tr>
          <th>id</th>
          <th>Email</th>
          <th>Password</th>
          <th>Address</th>
          <th>Phone</th>
          <th>chỉnh sửa</th>
          <th>Xóa</th>
        </tr>
      </thead>
      <tbody>
        {datalist.map((data, index) => (
          <tr key={data.id}>
            <th scope="row">{index + 1}</th>
            <td>{data.email}</td>
            <td>{data.password}</td>
            <td>{data.address}</td>
            <td>{data.phone}</td>
            <td>
              <Button>Edit</Button>
            </td>
            <td>
              <Button onClick={() => handleDelete(data.id)}>Delete</Button>
            </td>
          </tr>
        ))}
        ;
      </tbody>
    </Table>
  );
};

export default TableContainer;
