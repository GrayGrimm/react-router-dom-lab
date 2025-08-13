import { Link } from 'react-router';


const MailboxList = ({ mailboxes }) => {
    return(
        <>
        <h2>Mailboxes</h2>
        <ul>
            {mailboxes.map((mailbox, idx) => (
                <li key={idx}>
                    <Link to={`/mailboxes/${mailbox._id}`}>
                    Mailbox Owner:{mailbox.boxOwner} Box Number:{mailbox._id}
                    </Link>
                </li>
            ))}
        </ul>
        </>
    );
};

export default MailboxList;