import React from 'react'

 const P2p2 = () => {
    function navigation(event){
        Store.dispatch({"type": "page" ,"data": event.currentTarget.getAttribute("val")
        })
    }
  return (
    <div>
        <a onClick={navigation} val={"Page1"}>page1</a>
        <a onClick={navigation} val={"P2p1"}>page2</a>
        <br></br><br></br>
        <a onClick={navigation} val={"P2p1"}>p2-p1</a>
        <a onClick={navigation} val={"P2p2"}>p2-p2</a>
        <br></br><br></br>
        <h1>this is page2 to page2</h1>

    </div>
  )
}

export default P2p2