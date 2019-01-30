import React from 'react';


const FormSaveButtons = props => {
    return(
        <React.Fragment>
            <div className="Save-Goback-Btn">
                <button className="Save-Update-Btn" onClick={props.onClickSaveButton}>Save</button>
                <button className="GoBack-Btn" onClick={props.onClickGoBackButton}>Go back!</button>
             </div>
        </React.Fragment>
    );
}


export default FormSaveButtons;