import React from 'react';

const Contact = ({name, ext, telephone, dept, title, email}) => {
    return (
        <tr class="stripe-dark">
            <td class="pa3">{name}</td>
            <td class="pa3">{ext}</td>
            <td class="pa3">{telephone}</td>
            <td class="pa3">{dept}</td>
            <td class="pa3">{title}</td>
            <td class="pa3"><a href="{email}">{email}</a></td>
        </tr>
    );
}

export default Contact;