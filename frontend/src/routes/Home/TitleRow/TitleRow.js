import React from 'react';
import Button from '@material-ui/core/Button';
import { CartModalContainer } from '../CartModal/CartModalContainer';
import {MainPersonalMenuContainer} from './MainPersonalMenuContainer';

class TitleRow extends React.Component {
    render() {
        const {loginStatus, loginButtonHandler, logoClickedHandler} = this.props;

        return (
            <div style={{
                width: '100%',
                margin: '15px 0px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <div 
                    onClick={logoClickedHandler}
                    style={{
                        fontSize: '3rem',
                        width: '33%',
                        cursor: 'pointer'
                    }}
                >
                    order.me
                </div>

                
                <div style={{width: '33%', display: 'flex', justifyContent: 'flex-end'}}>
                    <div style={{marginRight: '1rem', display: 'flex', justifyContent: 'center'}}><CartModalContainer /></div>
                    {
                        loginStatus ? 
                            <MainPersonalMenuContainer /> :
                            <Button style={{height: '75%', margin: 'auto 0px', width: '33%'}} variant='outlined' color='secondary' onClick={loginButtonHandler}>Log in</Button>
                    }
                </div>
            </div>
        );
    }
}

export {TitleRow};
