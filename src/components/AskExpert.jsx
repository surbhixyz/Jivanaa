import React, { useState } from 'react';
import '../components/AskExpert.css';
import Navbar from './Navbar';
import { toast } from 'react-toastify';

const AskExpert = () => {
    
    const [selectedButtonType, setSelectedButtonType] = useState('Button 1');
    const [message, setMessage] = useState('');

    const handleButtonSelect = (buttonType) => {
        setSelectedButtonType(buttonType);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Message sent!");
    };

    return (
        <div>
            <Navbar />
            <div className='askform'>
                <form onSubmit={handleSubmit}>
                <div className='btns'>
                <label>Select Category</label>
                    <div className='button-container'>
                        
                        <button
                            type="button"
                            onClick={() => handleButtonSelect('Button 1')}
                            className={selectedButtonType === 'Button 1' ? 'selected' : ''}
                        >
                            Contraception
                        </button>
                        <button
                            type="button"
                            onClick={() => handleButtonSelect('Button 2')}
                            className={selectedButtonType === 'Button 2' ? 'selected' : ''}
                        >
                            LGBTQ+
                        </button>
                        <button
                            type="button"
                            onClick={() => handleButtonSelect('Button 3')}
                            className={selectedButtonType === 'Button 3' ? 'selected' : ''}
                        >
                            STIs
                        </button>
                        <button
                            type="button"
                            onClick={() => handleButtonSelect('Button 4')}
                            className={selectedButtonType === 'Button 4' ? 'selected' : ''}
                        >
                            Dysfunctionality
                        </button>
                        <button
                            type="button"
                            onClick={() => handleButtonSelect('Button 5')}
                            className={selectedButtonType === 'Button 5' ? 'selected' : ''}
                        >
                            Other
                        </button>
                    </div>
                    <div>
                        <textarea
                            value={message}
                            onChange={handleMessageChange}
                            rows="15"
                            cols="70"
                            placeholder='Type your message here anonymously'
                        />
                    </div>
                    <button type="submit">Send Message</button>
                    </div>
                </form>
                <p>We value your privacy and want you to feel comfortable seeking expert advice.</p>
            </div>
        </div>
    );
};

export default AskExpert;
