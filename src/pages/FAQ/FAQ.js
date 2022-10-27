import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Faq from '../../shared/Faq/Faq';

const FAQ = () => {
    const faqs = useLoaderData();
    console.log(faqs);
    return (
        <div className='container'>
            <h1 className='text-center fw-semibold mt-5 mb-2'>FAQ</h1>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                {
                    faqs.map(faq => <Faq key={faq.id} faq={faq}></Faq>)
                }
            </div>
        </div>
    );
};

export default FAQ;