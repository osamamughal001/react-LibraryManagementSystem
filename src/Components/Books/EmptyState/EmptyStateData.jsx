import React from 'react';


const EmptyStateData = props =>{

    return(
        <React.Fragment>
            <div className="Add-Btn-Container">
                <p className="No-Record-Message">No record found!</p>
                <button className="Add-Book-Btn" onClick={props.onClickAddEmptyState}>
                    Add Book
                </button>
            </div>
        </React.Fragment>
    )
}

export default EmptyStateData;