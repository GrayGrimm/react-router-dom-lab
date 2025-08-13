import { useParams } from 'react-router';


const MailboxDetails = ({ mailboxes }) => {
    const { mailboxesId } = useParams();
    console.log('mailboxesId:', mailboxesId)

    const mailbox = mailboxes.find((mailbox) => (
        mailbox._id === Number(mailboxesId)
    ));
    console.log('Mailbox Object:', mailbox)
    if (!mailbox) {
  return <h2>Mailbox Not Found!</h2>;
}

    return (
        <>
            <h2>Mailbox Details</h2>
            <dl>
                <dt>Mailbox Number:</dt>
                <dd>{mailbox._id}</dd>
                <dt>Mailbox Owner:</dt>
                <dd>{mailbox.boxOwner}</dd>
                <dt>Mailbox Size:</dt>
                <dd>{mailbox.boxSize}</dd>
            </dl>
        </>
    );
};

export default MailboxDetails;