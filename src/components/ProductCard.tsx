import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { ProductInterface } from '../types/products'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

export default function ProductCard( { product }: { product: ProductInterface}) {
    const { addToCart } = useCart();
    const navigate = useNavigate();
    const handleNavegateClick = () => navigate(`/product/${product.id}`);
    
    return (
        <Card sx={{ maxWidth: 345 }} onClick={handleNavegateClick}>
            <CardMedia
             component="img"
             height="140"
             image={product.image}
             alt={product.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5">
                    {product.title}
                </Typography>
                <Typography variant="body2" color="text.secundary">
                  ${product.price.toFixed(2)}
                </Typography>
                <Button
                 variant="contained"
                 onClick={() => addToCart(product)}
                 sx={{ mt: 2}}
                 
                >Add to Cart</Button>
            </CardContent>
        </Card>
    )
}