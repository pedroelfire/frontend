// pages/data.js
"use client";
import React, { useState, useEffect } from 'react';

const DataPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/inventory/manage/products/');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // La dependencia vacía asegura que el efecto se ejecute solo una vez al montar el componente.

  return (
    <div>
      <h1>Datos desde la URL</h1>
      <ul>
        {data.map((item) => (
          <li key={item.product_id}>{item.name} {item.stock}</li>
          // Asegúrate de ajustar 'id' y 'nombre' según la estructura de tus datos.
        ))}
      </ul>
    </div>
  );
};

export default DataPage;
