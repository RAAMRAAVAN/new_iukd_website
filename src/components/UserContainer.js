import React,{useEffect} from "react";
import {fetchUsers} from "../redux/user/userAction"
import Filter from "./filter"
import Header from "./Header"
import Pagignation from "./pagignation";
import Courses from "./Courses";
import {useSelector,useDispatch} from "react-redux";
import PrintingGraph from "./printingGraph";
function UserContainer()
{
    const userData=useSelector(state=>state.user)
    const dispatch=useDispatch();  

    useEffect(()=>{
        dispatch(fetchUsers());
    },[])
    return userData.loading?(
        console.log("loading")
    ): userData.error?(
        <div>{userData.error}</div>
    ):(
        <div>
            <Header/>
            <Filter/>
            <PrintingGraph/>
            <Courses/>
            <Pagignation/>
        </div>
    )
}
export default UserContainer;