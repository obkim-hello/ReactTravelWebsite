import React from 'react';
import CardIterm from './CardIterm';
import './Cards.css';

function Cards() {
    return (
        
        <div className="cards">
            <h1>
                Check out these EPIC Destinations!
            </h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardIterm
                            src="images/img-9.jpg"
                            text="Explore the hidden waterfall deep inside the Amazon Jungle"
                            lable="Adventure"
                            path="/services"
                        />
                        
                        <CardIterm
                            src="images/img-2.jpg"
                            text="Travel though the Island of Bali in a Private Cruise"
                            lable="Luxury"
                            path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardIterm
                            src='images/img-3.jpg'
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            // lable='Mystery'
                            lable="Mystery"
                            path='/services'
                        />
                        <CardIterm
                            src='images/img-4.jpg'
                            text='Experience Football on Top of the Himilayan Mountains'
                            lable='Adventure'
                            path='/products'
                        />
                        <CardIterm
                            src='images/img-8.jpg'
                            text='Ride through the Sahara Desert on a guided camel tour'
                            lable='Adrenaline'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;