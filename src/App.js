import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { apiKEY } from "./api/apiKey";
import api from './api/userAPI'
function App() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      const search = 'batman'
      const response = await api.get(`?s=${search}&apikey=${apiKEY}`);
      console.log(response.data);
      setUser(response.data)
    };
    fetchUser();
  }, []);

  return <div>{JSON.stringify(user.Search)}</div>;
}

export default App;
