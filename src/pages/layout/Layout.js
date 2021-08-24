import React from 'react';
import Navigation from '../../components/navigation/Navigation';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

export default function Layout(props) {
    return (
        <div>
            
            <div className="flex">
            <Header></Header>

            </div>

                {props.children}

            <Footer></Footer>

        </div>
    )
}
