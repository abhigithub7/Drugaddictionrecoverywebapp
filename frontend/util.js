// eslint-disable-next-line no-unused-vars
import {toast} from 'react-toastify'

export const handlsuccess =(msg)=>{
    toast.success(msg,{
        position: 'top-right'
    })
}

export const handlerror =(msg)=>{
    toast.error(msg,{
        position: 'top-right'
    })
}

