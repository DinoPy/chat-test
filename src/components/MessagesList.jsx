

export const MessagesList = ({messagesList}) => {
    return (
        <>
            <h1> Messages </h1>
            {messagesList.map((message,index) => <p key={index}> {message} </p>)}
        </>
    )
}
