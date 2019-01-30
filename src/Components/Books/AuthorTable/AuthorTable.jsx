import React from 'react';



const AuthorTable = props => {
return (
    <React.Fragment>
            <div>
            <p className="Book-List-Title">Author's Book</p>
            </div>

            <div className="Book-Table-Outer-Container">
                <table className="Book-Table">
                    <thead className="Book-Table-Heading">
                        <tr className="Book-Table-Heading-Row">
                            <th>Author</th>
                            <th>No. of Books</th>
                        </tr>
                    </thead>
                    
                    <tbody className="Book-Table-Body">
                    {
                        props.authorList.map( ( value, index ) =>
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


export default AuthorTable;