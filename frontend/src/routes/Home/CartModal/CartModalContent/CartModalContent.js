

import React from 'react';
import {FoodItems} from 'Components/FoodItems/FoodItems';
import {TotalPrice} from './TotalPrice';
import { RestaurantName } from './RestaurantName';
import { OrderControlsContainer } from './OrderControls/OrderControlsContainer';

class CartModalContent extends React.Component {

    render() {
        const { cart } = this.props;

        let statusColor = 'black';
        switch (cart.status) {
            case 'NOT PLACED':
                statusColor = 'black';
                break;
            case 'AWAITING CONFIRMATION':
                statusColor = 'gold';
                break;
            case 'CANCELED':
                statusColor = 'red';
                break;
            case 'ACCEPTED':
                statusColor = '#5f5';
                break;
            case 'CONFIRMED':
                statusColor = '#060';
                break;
            default:
                break;
        }
        
        const orderStatusText = (
            <div style={{
                color: statusColor,
                width: '20rem',
                textAlign: 'left',
            }}>
                {cart.status}
            </div>
        );

        if (cart.restaurantId === undefined) {
            return (
                <div
                    style={{
                        padding: '1rem 0rem 1rem 0rem',
                    }}
                >
                    <RestaurantName restaurantName='CART IS EMPTY' />
                </div>
            );   
        }

        return (
            <div
                style={{
                    padding: '1rem 0rem 1rem 0rem'
                }}
            >
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    {orderStatusText}
                    <RestaurantName restaurantName={cart.restaurantId} />
                    <div style={{width: '20rem', textAlign: 'right'}}>{'timestamp placeholder'}</div>
                </div>

                <FoodItems items={cart.foodItems} restaurantId={cart.restaurantId} editable={cart.status === 'NOT PLACED'} />

                <TotalPrice foodItems={cart.foodItems} />

                <OrderControlsContainer 
                    orderingStatus={cart.status}
                    orderedTimestamp={cart.timestamp}
                    acceptedTimestamp={cart.acceptedTimestamp}
                />
            </div>
        );
    }
}

export { CartModalContent };