import React from 'react';
import { Trans } from 'react-i18next';
import { Auth } from './Features/Auth';
import { AuthConsumer } from './Features/Auth/AuthProvider';

function Home() {
    var realConfirm=window.confirm;
    window.confirm=function(){
        window.confirm=realConfirm;
        return true;
    };

    return (
        <div>
            <h4><Trans i18nKey="description.part4">Welcome to teh age of Web3!</Trans></h4>
            <header className="App-header">
                <Auth>
                    <p className='simpleParaClass'>User Authenticated</p>
                    <AuthConsumer>
                        {(auth) => (
                        <button onClick={auth.logout}>Logout</button>
                        )}
                    </AuthConsumer>
                </Auth>
            </header>
        </div>
    );
};

export default Home;