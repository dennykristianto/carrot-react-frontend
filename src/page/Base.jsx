import React from 'react'
import swal from 'sweetalert2'

export default class Base extends React.Component {
    handleOnChange = (formName, e) => {
        const object=e.target;
        this.setState(
            (state) => (state && state[formName] ? {
                [formName]: {
                    ...state[formName],
                    [object.name]: object.value
                }
            } : {
                [formName]: {
                    [object.name]: object.value
                }
            })
        )
    }

    showInfoAlert = (title, message, isError=false) =>{
        swal.fire({
            title:title,
            text:message,
            type: isError?"error":"success",
        })
    }
}
