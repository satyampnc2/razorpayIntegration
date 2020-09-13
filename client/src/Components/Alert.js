import React,{useContext} from 'react'
import AlertContext from '../Context/AlertContext/alertContext'
const Alert = () => {
    const alertContext = useContext(AlertContext)
    const {alert} = alertContext
    return (
            alert != null && <div className={'alert all-center mx-2 bg-' + alert.type}>
                {alert.msg}
            </div>
        
    )
}

export default Alert