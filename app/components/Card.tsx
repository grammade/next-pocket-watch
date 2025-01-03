import React from 'react'
import style from './Card.module.css';
import Image from 'next/image';

interface CardProps{
    title:  React.ReactNode,
    desc: string,
    image: string,
    iw: number,
    ih: number
}

const Card: React.FC<CardProps> = ({title, desc, image, iw, ih}) => {
  return (
    <div className={style.card}>
      <div className={style.imageContainer}>
        <Image src={image} 
          className={style.image}
          alt='Lorem Picsum'
          width={iw}
          height={ih}
          />
      </div>
      <div className={style.title}>
        {title}
      </div>
      <div>
        {desc}
      </div>
    </div>
  )
}

export default Card