import Order from './Order.js';
import type { ProductStatus } from '../../../Types/Skyblock.js';

class Product {
  productId: string;
  sellSummary: Order[];
  buySummary: Order[];
  status: ProductStatus;
  constructor(data: Record<string, any>) {
    this.productId = data.product_id;
    this.sellSummary = data.sell_summary.map((sellOrder: Record<string, any>) => new Order(sellOrder));
    this.buySummary = data.buy_summary.map((buyOrder: Record<string, any>) => new Order(buyOrder));
    this.status = {
      sellPrice: Math.round(data.quick_status.sellPrice * 100) / 100,
      buyPrice: Math.round(data.quick_status.buyPrice * 100) / 100,
      sellVolume: data.quick_status.sellVolume,
      buyVolume: data.quick_status.buyVolume,
      sellMovingWeek: data.quick_status.sellMovingWeek,
      buyMovingWeek: data.quick_status.buyMovingWeek,
      sellOrders: data.quick_status.sellOrders,
      buyOrders: data.quick_status.buyOrders
    };
  }
}

export default Product;
