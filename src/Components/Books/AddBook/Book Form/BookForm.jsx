import React from 'react';


const BookForm = props => {
    return (
        <React.Fragment>
            <form className="Book-Form">
                <input className="Book-Inputs" type="text" placeholder="Book Name" value={props.bookNameValue} 
                onChange={props.onChangeBookName}/>
                <br/>
                <input  className="Book-Inputs" type="text" placeholder="Author" value={props.authorValue} 
                onChange={props.onChangeAuthor}/>
                <br/>
                <input  className="Book-Inputs" type="text" placeholder="Publisher" value={props.publisherValue} 
                onChange={props.onChangePublisher} />
                <br/>
                <input className="Book-Inputs" style={{textTransform:"uppercase"}} type="date" placeholder="Date Added" 
                value={props.dateValue} onChange={props.onChangeDate}/>
            </form>
        </React.Fragment>
    );
}
export default BookForm;