import React from 'react';

const Icon = () => {
    return (
        <div className='text-right fixed top-0 right-0'>
            <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 border-2 p-1 border-primary rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Icon;