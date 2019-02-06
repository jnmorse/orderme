import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import coinsUrl from './coins.png';

class FoodItem extends React.Component {

    removeItemHandler = () => {
        const {removeItemHandler, foodItem} = this.props;
        removeItemHandler(foodItem.restaurantId, foodItem.name);
    }

    decrementItemHandler = () => {
        const {decrementItemHandler, foodItem} = this.props;
        decrementItemHandler(foodItem.restaurantId, foodItem.name);
    }

    incrementItemHandler = () => {
        const {incrementItemHandler, foodItem} = this.props;
        incrementItemHandler(foodItem.restaurantId, foodItem.name);
    }

    render () {
        const {foodItem, editable} = this.props;

        const decrementItemElement = editable && (
            <div style={{cursor: 'pointer'}} onClick={this.decrementItemHandler}>-</div>
        );

        const incrementItemElement = editable && (
            <div style={{cursor: 'pointer'}} onClick={this.incrementItemHandler}>+</div>
        );

        const removeItemElement = editable && (
            <div style={{cursor: 'pointer'}} onClick={this.removeItemHandler}>
                <CloseIcon />
            </div>
        );

        const price = foodItem.quantity * foodItem.price;

        return (
            <li style={{
                borderBottom: '1px dashed black',
                marginTop: '10px',
                paddingBottom: '5px'
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%'
                }}>
                    <div>{foodItem.name}</div>
                    {removeItemElement}
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%'
                }}>
                    <div style={{
                        display: 'flex'
                    }}>
                        {decrementItemElement}
                        <div style={{paddingLeft: '10px', paddingRight: '10px'}}>{foodItem.quantity}</div>
                        {incrementItemElement}
                    </div>
                    
                    
                    <div style={{
                        display: 'flex'
                    }}>
                        <div style={{
                            backgroundImage: `url(${coinsUrl})`,
                            backgroundSize: '100% 100%',
                            width: '25px'
                        }} />
                        <div style={{margin: '0px 5px'}}>{price.toFixed(2)}</div>
                        <div>kn</div>
                    </div>
                    
                </div>
            </li>
        );
    }
}

export {FoodItem};