import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Button, 
  Divider, 
  Chip,
  Rating 
} from '@mui/material';
import { mockProducts } from '../types/products';
import { useCart } from '../context/CartContext';
import { ProductInterface } from '../types/products'

export default function Product() {
  const { id } = useParams<{ id: string }>();
  const [ product, setProduct ] = useState<ProductInterface | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    // Fetch product data (using mock data for now)
    const foundProduct = mockProducts.find(p => p.id === Number(id));
    setProduct(foundProduct || null);
  }, [id]);

  if (!product) return <Typography>Product not found</Typography>;

  return (
    <Box sx={{ p: 4 }}>
      <Grid container spacing={4}>
        {/* Product Image */}
        <Grid size = {{xs: 12, md: 6}}>
          <Box 
            component="img"
            src={product.image}
            alt={product.title}
            sx={{ 
              width: '100%', 
              height: 'auto',
              borderRadius: 2,
              boxShadow: 3
            }}
          />
        </Grid>

        {/* Product Info */}
        <Grid size = {{xs: 12, md: 6}}>
          <Typography variant="h4" gutterBottom>
            {product.title}
          </Typography>
          
          <Box display="flex" alignItems="center" gap={2} mb={2}>
            <Rating 
              value={product.rating.rate} 
              precision={0.5} 
              readOnly 
            />
            <Typography>({product.rating.count} reviews)</Typography>
          </Box>

          <Typography variant="h5" color="primary" gutterBottom>
            ${product.price.toFixed(2)}
          </Typography>

          <Typography variant="body1" >
            {product.description}
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Box display="flex" gap={2}>
            <Button 
              variant="contained" 
              size="large"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </Button>
            <Button variant="outlined" size="large">
              Buy Now
            </Button>
          </Box>

          <Box mt={3}>
            <Chip label="In Stock" color="success" />
            <Typography variant="body2" sx={{ mt: 1 }}>
              Free shipping on orders over $50
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}