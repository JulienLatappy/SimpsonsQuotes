import  React  from  'react';

const  DisplayEmployee = ({ quote }) => {
    return (
        <div  className="DisplayEmployee">
            <ul>
                <li>Quote : {quote.quote}</li>
                <li>Name : {quote.character}</li>
                <li>Direction : {quote.characterDirection}</li>
            </ul>
            <img  src={quote.image}></img>
        </div>
    );
};

export  default  DisplayEmployee;

