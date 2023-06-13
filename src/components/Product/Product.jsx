import React,{useState,useEffect}from 'react'
import './Product.css'
import NavCenterRes from '../NavCenterRes/NavCenterRes'
import MenuDownNav from '../MenuDownNav/MenuDownNav'
import NavInfo from '../NavInfo/NavInfo'
import ProductDetails from '../ProductDetails/ProductDetails'
import { sideLeftProduct } from '../../data';
import { useParams } from 'react-router-dom';
export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = sideLeftProduct.find((p) => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <div>
      <h3 className="text-center text-danger mt-5" style={{fontFamily:'iranBlack', fontSize: '2rem', fontWeight:'700'}}>با مشکل روبه شدید دوباره تلاش کنید</h3>
    </div>;
  }
  return (
    <>
       <div className="navCenter-res">
    <NavCenterRes/>
   </div>
    <div className="menuDown-nav">
    <MenuDownNav/>
    </div>
    <NavInfo page='جزئیات محصول' text='جزئیات محصول'/>
    <ProductDetails
    name={product.name}
    price={product.price}
    img={product.img}
    />
    </>
  )
}
