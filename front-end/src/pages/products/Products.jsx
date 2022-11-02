import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/navbar/NavBar';
import CardProduct from '../../components/card-product/CardProduct';
import MainContext from '../../context/MainContext';
import { getAllProducts } from '../../services/APIs';

const populateProducts = (products) => products.map((product) => (
  <div
    key={ product.id }
  >
    <CardProduct
      thumbnail={ product.url_image }
      id={ product.id }
      productName={ product.name }
      price={ product.price }
    />
  </div>
));

export default function Products() {
  const {
    products,
    setProducts,
  } = useContext(MainContext);
  const navigate = useNavigate();

  useEffect(() => {
    async function getitems() {
      const { data } = await getAllProducts();
      console.log('result', data);
      setProducts(data);
    }
    getitems();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="">
        { populateProducts(products) }
      </div>
      <button
        data-testid="customer_products__checkout-bottom-value"
        type="button"
        onClick={ () => navigate('/customer/checkout') }
      >
        checkout
      </button>
    </div>
  );
}
