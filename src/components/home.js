 import Header from "./header";
 import { useEffect } from "react";
 import { infor, TkOTP, Statuss, Vieww, warningLL, ViewList } from "~/redux/Actions";
 import { useDispatch } from "react-redux";
 function Home({children}) {

  const dispatch =useDispatch()

  useEffect ( () => {
    dispatch(infor())
    dispatch(TkOTP())
    dispatch(Statuss())
    dispatch(Vieww())
    dispatch(warningLL())
    dispatch(ViewList())
},[])

  return ( <div>
    
      <Header/>
      <div className="layout">{ children}</div>
  </div> );
}

export default Home;