import React, { useState, useEffect } from 'react';

function Search() {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState('');

  // Fetch products from the API
    useEffect(() => {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.error('Error fetching products:', error));
    }, []);

  // Function to handle search button click
    const searchProduct = () => {
    if (selectedProduct) {
      // You can perform further actions here, like fetching detailed information about the selected product
        alert(`Searching for product with ID: ${selectedProduct}`);
    } else {
        alert('Please select a product from the dropdown.');
    }
    };

    return (
    <>
        <header>
        <h1>Shop-EASE</h1>
        </header>
        <select value={selectedProduct} onChange={e => setSelectedProduct(e.target.value)}>
        <option value="">Select a product...</option>
        {products.map(product => (
            <option key={product.id} value={product.id}>{product.title}</option>
        ))}
        </select>
        <button onClick={searchProduct}>Search</button>
    </>
    );
}

export default Search;