import React from 'react'
import {
    Box,
    Card,
    CardActions,
    CardContent,
    Collapse,
    Button,
    Typography,
    Rating,
    useTheme,
    useMediaQuery
} from '@mui/material';
import { useGetProductsQuery } from 'state/api.js';
import Header from 'components/Header';

const Products = () => {
    // const { data: products, isLoading } = useGetProductsQuery();
    const { data } = useGetProductsQuery();
    console.log("data 11111", data)
    return (
        <Box>
            <Header title="PRODUCTS" subtitle="See your list of products." />

        </Box>
    )
}

export default Products