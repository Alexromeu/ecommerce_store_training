import { 
  Box, 
  Typography, 
  Grid, 
  Button, 
  Divider, 
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';
import { 
  Add as AddIcon, 
  Remove as RemoveIcon, 
  Delete as DeleteIcon 
} from '@mui/icons-material';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cart.length === 0) {
    return (
      <Box sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Your cart is empty
        </Typography>
        <Button 
          component={Link} 
          to="/" 
          variant="contained" 
          sx={{ mt: 2 }}
        >
          Continue Shopping
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Your Shopping Cart
      </Typography>
      
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Subtotal</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Box
                      component="img"
                      src={item.image}
                      alt={item.title}
                      sx={{ width: 80, height: 80, mr: 2, borderRadius: 1 }}
                    />
                    <Typography>{item.title}</Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box display="flex" alignItems="center" justifyContent="center">
                    <IconButton 
                      onClick={() => removeFromCart(item.id)}
                      size="small"
                    >
                      <RemoveIcon />
                    </IconButton>
                    <Typography sx={{ mx: 2 }}>{item.quantity}</Typography>
                    <IconButton 
                      onClick={() => addToCart(item)}
                      size="small"
                    >
                      <AddIcon />
                    </IconButton>
                  </Box>
                </TableCell>
                <TableCell align="right">${item.price.toFixed(2)}</TableCell>
                <TableCell align="right">
                  ${(item.price * item.quantity).toFixed(2)}
                </TableCell>
                <TableCell align="right">
                  <IconButton 
                    onClick={() => removeFromCart(item.id)}
                    color="error"
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end' }}>
        <Box sx={{ width: 300 }}>
          <Typography variant="h6" gutterBottom>
            Order Summary
          </Typography>
          <Divider />
          <Box display="flex" justifyContent="space-between" mt={2}>
            <Typography>Subtotal</Typography>
            <Typography>${total.toFixed(2)}</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" mt={1}>
            <Typography>Shipping</Typography>
            <Typography>FREE</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" mt={1} mb={2}>
            <Typography>Tax (estimated)</Typography>
            <Typography>${(total * 0.1).toFixed(2)}</Typography>
          </Box>
          <Divider />
          <Box display="flex" justifyContent="space-between" mt={2}>
            <Typography variant="h6">Total</Typography>
            <Typography variant="h6">
              ${(total * 1.1).toFixed(2)}
            </Typography>
          </Box>
          <Button 
            variant="contained" 
            fullWidth 
            size="large" 
            sx={{ mt: 3 }}
            component={Link}
            to="/checkout"
          >
            Proceed to Checkout
          </Button>
          <Button 
            onClick={clearCart}
            color="error"
            sx={{ mt: 1 }}
          >
            Clear Cart
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
