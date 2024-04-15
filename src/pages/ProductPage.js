
import { Link, useParams } from "react-router-dom";
import ProductList from "../components/ProductList";
import ProductForm from "../components/ProductForm";
import { Container } from "@mui/material";
import {useEffect, useState} from "react"

function ProductPage() {
    const {id} = useParams()

    const [product, setProduct] = useState({})


    useEffect(()=> {
        fetch(`producturl/${id}`).then(r=>r.json()).then(data => {
            setProduct(data)
        })
    }, [id])

    return (
        <div className="Home">
            <h1>Product-page</h1>
        </div>
    );
}

export default ProductPage;