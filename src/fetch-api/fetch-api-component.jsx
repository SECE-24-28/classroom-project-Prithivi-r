import React, { useState } from "react";
import axios from "axios";
const FetchApiComponent = () => {
  const [products, setProducts] = useState([]);
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);

  const fetchAllData = async () => {
    const [productsRes, todosRes, usersRes] = await Promise.all([
      axios("https://dummyjson.com/products"),
      axios("https://dummyjson.com/todos"),
      axios("https://dummyjson.com/users"),
    ]);
    setProducts(productsRes.data.products);
    setTodos(todosRes.data.todos);
    setUsers(usersRes.data.users);
  };

  return (
    <div style={{ backgroundColor: '#333', color: '#fff', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ color: '#fff', fontSize: '24px' }}>API Fetch</h1>
      <button onClick={fetchAllData} style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginBottom: '20px' }}>Fetch Data</button>

      <h2 style={{ color: '#fff', backgroundColor: '#555', padding: '10px', borderRadius: '4px' }}>Products</h2>
      <div style={{ backgroundColor: '#444', padding: '15px', borderRadius: '4px', marginBottom: '20px', border: '1px solid #666' }}>
        {products.length === 0 ? (
          <p style={{ color: '#fff' }}>No products</p>
        ) : (
          products.map((item) => (
            <div key={item.id} style={{ marginBottom: '10px', padding: '10px', backgroundColor: '#555', borderRadius: '4px' }}>
              <h3 style={{ color: '#fff', margin: '0 0 5px 0' }}>{item.title}</h3>
              <p style={{ color: '#fff', margin: '0' }}>${item.price}</p>
            </div>
          ))
        )}
      </div>

      <h2 style={{ color: '#fff', backgroundColor: '#555', padding: '10px', borderRadius: '4px' }}>Todos</h2>
      <div style={{ backgroundColor: '#444', padding: '15px', borderRadius: '4px', marginBottom: '20px', border: '1px solid #666' }}>
        {todos.length === 0 ? (
          <p style={{ color: '#fff' }}>No todos</p>
        ) : (
          todos.map((item) => (
            <div key={item.id} style={{ marginBottom: '10px', padding: '10px', backgroundColor: '#555', borderRadius: '4px' }}>
              <p style={{ color: '#fff', margin: '0' }}>{item.todo}</p>
            </div>
          ))
        )}
      </div>

      <h2 style={{ color: '#fff', backgroundColor: '#555', padding: '10px', borderRadius: '4px' }}>Users</h2>
      <div style={{ backgroundColor: '#444', padding: '15px', borderRadius: '4px', border: '1px solid #666' }}>
        {users.length === 0 ? (
          <p style={{ color: '#fff' }}>No users</p>
        ) : (
          users.map((item) => (
            <div key={item.id} style={{ marginBottom: '10px', padding: '10px', backgroundColor: '#555', borderRadius: '4px' }}>
              <h3 style={{ color: '#fff', margin: '0 0 5px 0' }}>
                {item.firstName} {item.lastName}
              </h3>
              <p style={{ color: '#fff', margin: '0' }}>{item.email}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default FetchApiComponent;
