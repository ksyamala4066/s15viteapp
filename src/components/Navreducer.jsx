import React from 'react'

 const Navreducer = (state='Page1',action) => {
    switch(action.type){
        case "page":
            state=action.date;
            return state;
        default: return state;
    }
}
export default Navreducer

