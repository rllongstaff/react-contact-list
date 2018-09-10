import React from 'react';

const Contact = ({name, ext, telephone, dept, title, email}) => {
    return (
        <tr className="stripe-dark">
            <td className="pa3">{name}</td>
            <td className="pa3">{ext}</td>
            <td className="pa3">{telephone}</td>
            <td className="pa3">{dept}</td>
            <td className="pa3">{title}</td>
            <td className="pa3"><a href="{email}">{email}</a></td>
        </tr>
    );
}

export default Contact;