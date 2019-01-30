import React from 'react';
import './multiselect.css';


const MultiSelect = props =>{ 
    return (
        <React.Fragment>
            <select className="Multiselect" name="multiselect" id="multiselect" value={props.multiSelectValue} onChange={props.onChangeMultiselectValue}>
            <option className="Multiselect-Option" value="None">None</option>
            <option className="Multiselect-Option" value="Publisher">Publisher</option>
            <option className="Multiselect-Option" value="Author">Author</option>
            </select>
        </React.Fragment>
    );
}

export default MultiSelect;