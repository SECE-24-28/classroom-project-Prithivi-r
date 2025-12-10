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
    <div style={{ backgroundColor: 'white', color: 'black', minHeight: '100vh', padding: '20px' }}>
      <h1>API Fetch</h1>
      <button onClick={fetchAllData}>Fetch Data</button>

      <h2>Products</h2>
      {products.length === 0 ? (
        <p>No products</p>
      ) : (
        products.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>${item.price}</p>
          </div>
        ))
      )}

      <h2>Todos</h2>
      {todos.length === 0 ? (
        <p>No todos</p>
      ) : (
        todos.map((item) => (
          <div key={item.id}>
            <p>{item.todo}</p>
          </div>
        ))
      )}

      <h2>Users</h2>
      {users.length === 0 ? (
        <p>No users</p>
      ) : (
        users.map((item) => (
          <div key={item.id}>
            <h3>
              {item.firstName} {item.lastName}
            </h3>
            <p>{item.email}</p>
          </div>
        ))
      )}
    </div>
  );
};
export default FetchApiComponent;
