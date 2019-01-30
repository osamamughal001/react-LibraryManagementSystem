import React from 'react';

const FormUpdateButtons = props => {
    return(
        <React.Fragment>
            <div className="Update-Goback-Btn">
                <button className="Save-Update-Btn" onClick={props.onClickUpdateButton}>Update</button>
                <button className="GoBack-Btn" onClick={props.onClickGoBackButton}>Go back!</button>
            </div>
        </React.Fragment>
    );
}

export default FormUpdateButtons;