import React from 'react';

const Contact = ({name, ext, phone, dept, username, email}) => {
    return (
        <tr className="stripe-dark">
            <td className="pa3 tl">{name}</td>
            <td className="pa3 tl">{phone}</td>
            <td className="pa3 tl">{dept}</td>
            <td className="pa3 tl">{username}</td>
            <td className="pa3 tl"><a href="{email}">{email}</a></td>
        </tr>
    );
}

export default Contact;