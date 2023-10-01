import React from 'react'
import { data } from "../../Data/Data"
import "./styles.css"
import Card from '../Card/Card'

function Products() {
  

  return (
    <section>
      {
        data.map((item) =>
          <Card key={item.id} item={item}  />
        )
      }
    </section>
  )
}

export default Products