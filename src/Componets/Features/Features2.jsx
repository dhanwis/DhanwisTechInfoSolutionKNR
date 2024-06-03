import React from 'react';
import './Features2.css';
import { useNavigate } from 'react-router-dom';

const Features2 = ({ title, text, path }) => {
    const navigate = useNavigate()
    
    const handleNavigate = () => {
        navigate(path);
    }
    return (

        <div className="gpt3__features-container__feature">
            <div className="gpt3__features-container__feature-title">
                <div />
                <h1 style={{ cursor: 'pointer' }} onClick={handleNavigate}>{title}</h1>
            </div>
            <div className="gpt3__features-container_feature-text">
                <p>{text}</p>
            </div>
        </div>
    )
};

export default Features2;
