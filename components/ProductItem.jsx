import Image from 'next/image'
const ProductItem = (props) => {


  return (
    <div className="card my-2">
      <Image src="/images/prod-1.jpg" width="720" height="480" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">
          {props.title}
        </h5>
        <p className="card-text fw-bolder">$ 25</p>
        <a href="#" className="btn btn-primary">See Product</a>
      </div>
    </div>
  )
}


export default ProductItem