import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Chat2 from './Chat2';
import Table from 'react-bootstrap/Table';

function Chat() {
  const [data, setData] = useState([]);
  const getdata = useCallback(async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/get");
      setData(res.data);
      console.log("Data fetched:", res.data);
    } catch (error) {
      console.log(error);
    }
  }, []); 

  
  useEffect(() => {
    getdata(); 
  }, [getdata]); 

  return (
    <div>
      <br/>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                </tr>
              );
            })
          }
        </tbody>
      </Table>
      <Chat2 getdata={getdata} />
    </div>
  );
}

export default Chat;
