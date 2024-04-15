import React, { useState, useEffect } from 'react';

function Search() {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState('');
    const [searchedProduct, setSearchedProduct] = useState(null);

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
            const product = products.find(product => product.id === parseInt(selectedProduct));
            if (product) {
                setSearchedProduct(product);
            } else {
                alert('Product not found.');
            }
        } else {
            alert('Please select a product from the dropdown.');
        }
    };
    return (
        <>
            <header></header>
            <select value={selectedProduct} onChange={e => setSelectedProduct(e.target.value)}>
                <option value="">Select a product...</option>
                {products.map(product => (
                    <option key={product.id} value={product.id}>{product.title}</option>
                ))}
            </select>
            <button onClick={searchProduct}>Search</button>
            {searchedProduct && (
                <div>
                    <h2>{searchedProduct.title}</h2>
                    <img
                        component="img"
                        height="300"
                        width="300"
                        src={searchedProduct.image}
                        alt={searchedProduct.title}
                        style={{ objectFit: 'contain' }}
                    />
                </div>
            )}
        </>
    );
}

export default Search;