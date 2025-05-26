import  { Grid } from '@mui/material';
import ProductCard from '../components/ProductCard';
import { mockProducts } from '../types/products';


export default function Products() {
  return (
    <Grid container spacing={4} sx={{ p: 4 }}>
      {mockProducts.map((product) => (
        <Grid
          key={product.id}
          size = {{ xs: 12, md: 4, sm: 6}}
        >
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}