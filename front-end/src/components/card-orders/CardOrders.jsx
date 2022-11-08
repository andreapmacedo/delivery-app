import { useNavigate, useLocation } from 'react-router-dom';
import moment from 'moment/moment';
import Proptypes from 'prop-types';

moment.locale('pt-br');

moment().format('DD/MM/YYYY');

export default function CardOrders({
  id,
  status,
  saleDate,
  totalPrice,
  deliveryAddress,
  deliveryNumber,
}) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const role = pathname.split('/')[1];

  return (
    <div
      className="card-orders"
    >
      <button
        type="button"
        data-testid={ `${role}_orders__element-order-id-${id}` }
        onClick={ () => navigate(`/${role}/orders/${id}`) }
      >
        { id }
      </button>
      <p
        data-testid={ `${role}_orders__element-delivery-status-${id}` }
      >
        { status }
      </p>
      <p
        data-testid={ `${role}_orders__element-order-date-${id}` }
      >
        { moment(saleDate).format('DD/MM/YYYY') }
      </p>
      <p
        data-testid={ `${role}_orders__element-card-price-${id}` }
      >
        { Number(totalPrice).toFixed(2).replace('.', ',') }
      </p>
      {
        role === 'seller'
        && (
          <p data-tesid={ `seller_orders__element-card-address-${id}` }>
            { `${deliveryAddress}, ${deliveryNumber}` }
          </p>)
      }
    </div>
  );
}

CardOrders.propTypes = {
  id: Proptypes.number,
  status: Proptypes.string,
  saleDate: Proptypes.string,
  totalPrice: Proptypes.number,
}.isRequired;
