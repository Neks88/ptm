import React from 'react';

const Contact = (props) => {
    setTimeout(()=> {
        props.history.push('/about')
    },2000) 
    return (
        <div className="container">
            <h3 className="center">Contact</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore vitae reiciendis at amet totam odit nemo cum accusantium mollitia, quia ipsum pariatur architecto officia voluptatibus delectus voluptatem quidem facilis voluptas?</p>
        </div>
    )
}

export default Contact;