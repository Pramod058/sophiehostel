import React from 'react'
import './Plans.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faUtensils, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

const Plans = () => {

    const plans = [
        {
            id: 1,
            icon: faBed,
            title: 'Basic Plan',
            price: 'Rs 15000 / month',
            features: ['Shared Room', '3 Meals per Day', 'Free WiFi', 'Common Study Area'],
        },
        {
            id: 2,
            icon: faUtensils,
            title: 'Comfort Plan',
            price: 'Rs 16000 / month',
            features: ['Private Room', '3 Meals per Day', 'Free WiFi', 'Fitness Center Access', 'Laundry Service'],
        },
        {
            id: 3,
            icon: faShieldAlt,
            title: 'Premium Plan',
            price: 'Rs 17000 / month',
            features: ['Private Deluxe Room', '5 Meals per Day', 'High-Speed Internet', 'Personal Study Area', '24/7 Security', 'Personal Laundry Service'],
        }
    ];

    return (

            <div className="mainContainer plans-container" name='plans'>
                {plans.map((plan) => (
                    <div className="plan-card" key={plan.id}>
                        <FontAwesomeIcon icon={plan.icon} className="plan-icon" />
                        <h3 className="plan-title">{plan.title}</h3>
                        <p className="plan-price">{plan.price}</p>
                        <ul className="plan-features">
                            {plan.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                        <a href="" className="mainButton pink-btn">Choose Plan</a>
                    </div>
                ))}
            </div>

    );
}

export default Plans;