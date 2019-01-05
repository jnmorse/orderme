

import React from 'react';
import Button from '@material-ui/core/Button';
/* import DialogActions from '@material-ui/core/DialogActions'; */
import {CustomLinearProgressContainer} from '../CustomLinearProgress/CustomLinearProgressContainer';
import {FoodItems} from 'Components/FoodItems/FoodItems';
import CustomProgress2 from '../CustomProgress2/CustomProgress2';

class OrderItem extends React.Component {

    cancelOrder = () => {
        this.props.cancelOrderClickHandler(this.props.orderData._id);
    } 

    render() {

        const { isLastChild, orderData} = this.props;

        let statusColor = 'black';
        switch (orderData.status) {
            case 'NOT_PLACED':
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

        const cancelOrderButton = orderData.status === 'AWAITING CONFIRMATION' || orderData.status === 'ACCEPTED' ? (
            <Button onClick={this.cancelOrder} color="primary">
                Cancel
            </Button>
        ) : <div />;

        const canceledStatusText = (
            <div style={{
                color: statusColor,
                padding: '8px 0px'
            }}>
                {orderData.status}
            </div>
        );

        const progressComponentAwaiting = orderData.status === 'AWAITING CONFIRMATION' && (
            <CustomLinearProgressContainer 
                orderId={orderData._id}
                orderStatus={orderData.status}
                initialTimestamp={orderData.timestamp}
                duration={10} 
            />
        );

        const progressComponentAccepted = orderData.status === 'ACCEPTED' && (
            <CustomLinearProgressContainer 
                orderId={orderData._id}
                orderStatus={orderData.status}
                initialTimestamp={orderData.acceptedTimestamp}
                duration={10} 
            />
        );

        const newProgressComponent = orderData.status === 'AWAITING CONFIRMATION' && (
            <CustomProgress2 
                orderStatus={orderData.status}
                initialTimestamp={orderData.timestamp}
                duration={10} 
            />
        );

        return (
            
            <div
                style={{
                    padding: '10px 0px 0px 0px',
                    color: 'black',
                    borderBottom: !isLastChild && '1px dashed black'
                }}
            >
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <div style={{
                        fontWeight: 'bold'
                    }}>{orderData.restaurantId}:</div>
                    <div>{orderData.localeTimestamp}</div>
                </div>
                <FoodItems items={orderData.items} />

                {/* <DialogActions>
                </DialogActions> */}

                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    {cancelOrderButton}
                    {canceledStatusText}
                </div>
                

                {progressComponentAwaiting}
                {progressComponentAccepted}
                {newProgressComponent}
            </div>

        );
    }
}

export { OrderItem };