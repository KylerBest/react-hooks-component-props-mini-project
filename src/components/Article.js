import React from "react";

function Article({title, date = "January 1, 1970", preview, minutes}){
    const getMinutes = () => {
        if(minutes < 30){
            return `${'☕️'.repeat(minutes / 5 + (minutes % 5 > 0 ? 1 : 0))} ${minutes} minute read`
        }else{
            return `${'🍱'.repeat(minutes / 10 + (minutes % 10 > 0 ? 1 : 0))} ${minutes} minute read`
        }
    }
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
            <p>{getMinutes()}</p>
        </article>
    )
}

export default Article