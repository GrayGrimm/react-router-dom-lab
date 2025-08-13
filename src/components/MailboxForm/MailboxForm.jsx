
import { useState } from 'react';
import { useNavigate } from 'react-router';

const initialState = { 
    boxSize: '',
    boxOwner: '',
}

const MailboxForm = ({ addBox }) => {
    const [formData, setFormData] = useState(initialState);
    const navigate=useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox(formData);
        setFormData(initialState);
        navigate('/mailboxes')
    }
    const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

    return (
        <>
            <h2>New Mailbox Form</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='boxSize'>Box Size:</label>
                <select
                    name='boxSize'
                    value={formData.boxSize}
                    onChange={handleChange}>
                    <option value=''>--Please select an option--</option>
                    <option value='small'>Small Mailbox(12"W x 12"D x 4"H)</option>
                    <option value='medium'>Medium Mailbox(16"W x 16"D x 12"H)</option>
                    <option value='large'>Large Mailbox(20"W x 20"D x 16"H)</option>
                    <option value='x-large'>X-Large Mailbox(24"W x 24"D x 20"H)</option>
                </select>
                <label htmlFor='boxOwner'>Box Owner:</label>
                <input
                    type='text'
                    name='boxOwner'
                    value={formData.boxOwner}
                    onChange={handleChange}
                />
                <button type='submit'>Submit for new mailbox</button>
            </form>
        </>

    );
};

export default MailboxForm;