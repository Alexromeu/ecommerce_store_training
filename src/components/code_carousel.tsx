import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import './carouselStyles.css'
import { useNavigate } from "react-router-dom";
import { mockProducts } from '../types/products';

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop:false })
  const navigate = useNavigate()
  
  useEffect(() => {})

  useEffect(() => {
    if (emblaApi) {
      console.dir(emblaRef)
    }
  }, [emblaApi])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide"  onClick={() => navigate("/product/:id")}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRplF9D_R7tnjW7jZoP5c9fibhwVjodydfqrg&s" alt="a" /></div>
        {mockProducts.map(product => (
          <div key={product.id} className="embla__slide"  onClick={() => navigate(`/product/${product.id}`)}><img src={`${product.image}`}/></div>
        ))}
      </div>
    </div>
  )
}

//have to import the product objs and use map to make the slider, then,
// need to manage the click event