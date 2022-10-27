import React from 'react';

const Faq = ({faq}) => {
    return (
        <div className=' p-5 m-5 blog'>
            <p className='fs-5 fw-semibold'>{faq.question}</p>
            <p>{faq.answer}</p>
        </div>
    );
};

export default Faq;