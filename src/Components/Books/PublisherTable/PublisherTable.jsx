import React from 'react';

const PublisherTable = props => {
return (
    <React.Fragment>
            <div>
            <p className="Book-List-Title">Publisher's Book</p>
            </div>

            <div className="Book-Table-Outer-Container">
                <table className="Book-Table">
                    <thead className="Book-Table-Heading">
                        <tr className="Book-Table-Heading-Row">
                            <th>Publisher</th>
                            <th>No. of Books</th>
                        </tr>
                    </thead>
    
                    <tbody className="Book-Table-Body">
                    {
                        props.publisherList.map( ( value, index ) =>
                        <tr key={index} className="Book-Table-Body-Row">
                            <td>{value.name}</td>
                            <td>{value.noOfBooks}</td>
                        </tr>
                        )
                    }
        
                    </tbody>
                </table>
                <div>
                    <button className="GoBack-Btn" onClick={props.onGoBackClick}>Go Back!</button>
                </div>
            </div>

    </React.Fragment>
    );
}


export default PublisherTable;