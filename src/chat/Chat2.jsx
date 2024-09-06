import axios from 'axios';
import React, { useState } from 'react';

function Chat2({ getdata }) {
  const [id, setId] = useState('');
  const [name, setName] = useState('');

  const post = async () => {
    const data = {
      id: id,
      name: name,
    };

    try {
      const res = await axios.post('http://localhost:5000/api/post', data);
      if (typeof getdata === 'function') {
        getdata();
      } else {
        console.log('getdata is not a function');
      }
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div>
      <input placeholder='id' value={id} onChange={(e) => setId(e.target.value)} /><br/>
      <input placeholder='name' value={name} onChange={(e) => setName(e.target.value)} /><br/>
      <button onClick={post}>+Add</button>
    </div>
  );
}

export default Chat2;
