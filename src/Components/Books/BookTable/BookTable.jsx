import React from 'react';
import './bookTable.css';


const BookTable = props =>{
        return ( 
            <React.Fragment>

            <div>
            <p className="Book-List-Title">Book Record</p>
            </div>

            <div className="Book-Table-Outer-Container">
                <table className="Book-Table">
                    <thead className="Book-Table-Heading">
                        <tr className="Book-Table-Heading-Row">
                            <th>Book Id</th>
                            <th>Book Name</th>
                            <th>Author</th>
                            <th>Publisher</th>
                            <th>Date Added</th>
                            <th>Actions</th>
                        </tr>
                    </thead> 
                  
                    <tbody className="Book-Table-Body">
                    {
                        props.bookData.map( ( value, index ) =>
                        <tr key={index} className="Book-Table-Body-Row">
                            <td>{value.bookId}</td>
                            <td>{value.bookName}</td>
                            <td>{value.author}</td>
                            <td>{value.publisher}</td>
                            <td>{value.date}</td>
                            <td>
                                <span className="Delete-Btn" onClick={props.onClickDelete.bind(null,value.bookId)}><i className="fas fa-trash-alt"></i></span>
                                <span className="Book-Table-Action-Separator">|</span> 
                                <span className="Update-Btn" onClick={props.onClickUpdate.bind(null, value)}><i className="fas fa-pen"></i></span></td>
                        </tr>
                        )
                    }
                        <tr className="Book-Table-Body-Row">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><span className="Add-Btn" onClick={props.onAddClick}> <i className="fas fa-plus"></i></span></td>
                        </tr>
                    </tbody>
                </table>
                
            </div>
            
            </React.Fragment>
         );
    }
 
export default BookTable;
