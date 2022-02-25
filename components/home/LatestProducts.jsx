import React from 'react'
import ProductItem from '../ProductItem'

const LatestProducts = () => {
  const products = [
    {
      id: 1,
      title: 'Jeans pour Homme', 
    },
    {
      id: 2,
      title: 'Sandale pour Femme', 
    },
    {
      id: 3,
      title: 'Costume de fêtes',
    },
    {
      id: 4,
      title: 'Babouche Flip Flop',
    },
    {
      id: 5,
      title: 'Poudre pour Bébés',
    },
    {
      id: 6,
      title: 'Téléphone Fixe'
    },
  ]

  return (
    <div className="container my-4">
        <h1 className="display-4 my-4 fw-bold text-secondary">
          Latest Products
        </h1>
        <div className="">
          <div className="d-flex justify-content-between align-items-center row">
            {products.map((item) => (
              <div key={item.id} className="col-6 col-md-4">
                <ProductItem title={item.title}  />
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default LatestProducts