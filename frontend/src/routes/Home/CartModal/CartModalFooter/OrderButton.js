import React from 'react'
import Button from '@material-ui/core/Button';

class OrderButton extends React.Component {
    render() {
        const {orderButtonClickHandler, loginStatus, cartFilled} = this.props;

        const disabled = loginStatus === false || cartFilled === false;

        return (
            <Button onClick={orderButtonClickHandler} color="primary" style={{fontSize: '1.2rem'}} disabled={disabled}>
                {loginStatus ? 'Order' : 'Order (Log in)'}
            </Button>
        );
    }
}

export {OrderButton};
