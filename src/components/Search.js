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
            <header>
                {/* Add header content here if needed */}
            </header>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                {/* Styled search bar */}
                <select
                    value={selectedProduct}
                    onChange={e => setSelectedProduct(e.target.value)}
                    style={{
                        padding: '10px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                        marginRight: '10px',
                        fontSize: '14px',
                        width: '200px', 
                    }}
                >
                    <option value="">Select a product...</option>
                    {products.map(product => (
                        <option key={product.id} value={product.id}>{product.title}</option>
                    ))}
                </select>
                {}
                <button
                    onClick={searchProduct}
                    style={{
                        backgroundColor: '#D2B48C',
                        color: 'white',
                        padding: '10px 20px', 
                        borderRadius: '5px', 
                        fontWeight: 'bold', 
                        fontSize: '14px', 
                        cursor: 'pointer',
                        border: 'none', 
                    }}
                >
                    Search
                </button>
            </div>
            {searchedProduct && (
                <div>
                    <h2>{searchedProduct.title}</h2>
                    <img
                        src={searchedProduct.image}
                        alt={searchedProduct.title}
                        style={{ height: '300px', width: '300px', objectFit: 'contain' }}
                    />
                </div>
            )}
        </>
    );
}

export default Search;
