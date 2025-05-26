import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { useNavigate } from "react-router-dom";
import { mockProducts } from '../types/products';
import { usePrevNextButtons, PrevButton, NextButton } from './carousel_arrows'



export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop:true })
  const navigate = useNavigate()

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi)
  
  useEffect(() => {})

  useEffect(() => {
    if (emblaApi) {
      console.dir(emblaRef)
    }
  }, [emblaApi])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
          {mockProducts.map(product => (
          <div key={product.id} className="embla__slide"  onClick={() => navigate(`/product/${product.id}`)}><img src={`${product.image}`}/></div>
        ))}
      </div>
      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </div>
  )
}

