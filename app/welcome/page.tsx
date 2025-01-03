import React from 'react'
import Card from '../components/Card'
import { Lorem } from '../utils/Lorem'



const page = async () => {
  const iw = 200
  const ih = 400

  const cardList: Promise<JSX.Element>[] = []
  for (let i = 0; i <= 10; i++) {
    cardList.push((async () => {
      const imgUrl = await Lorem.image(iw, ih)
      console.log(`${i}: ${imgUrl}`)
      return (
        <Card
          title={Lorem.get(2)}
          desc={Lorem.get(10)}
          image={imgUrl}
          iw={iw}
          ih={ih}
        />)
    })()
    )
  }
  
  const resolvedCards = await Promise.all(cardList);
  return (
    <div>
      {resolvedCards}
    </div>
  )
}

export default page 