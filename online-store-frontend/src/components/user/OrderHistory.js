import React, { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { getOrdersByUser } from '../../services/orderService';

const OrderHistory = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getOrdersByUser(user.id);
        setOrders(data);
      } catch (err) {
        setError('Error fetching order history');
        console.error('Error fetching order history:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user.id]);

  return (
    <div>
      <h2>Order History</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && (
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              <p>Order ID: {order.id}</p>
              <p>Total Amount: ${order.totalAmount}</p>
              <p>Status: {order.status}</p>
              {/* Add additional order details */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderHistory;
