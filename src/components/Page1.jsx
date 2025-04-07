import React from 'react'
const Page1 = () => {
        Store.dispatch({"type": "page" ,"data": event.currentTarget.getAttribute("val")
        })
    function navigation(event){
    }
  return (
    <div>
        <a onClick={navigation} val={"page1"}>page1</a>
        <a onClick={navigation} val={"p2p1"}>page2</a>
        <br></br><br></br>
        <h1>this is page1</h1>

    </div>
  )
}

export default Page1