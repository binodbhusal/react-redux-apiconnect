import UserItem from "./UserItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Redux/store/userSlice";
import { useEffect } from "react";

const UserList = ()=> {
    const dispatch = useDispatch();
    const { user, isLoading, error } = useSelector((store) => store.user);
useEffect(() => {
dispatch(fetchData())

}, [dispatch]);
if(isLoading) {
    return (
        <p>is Loading...Please wait</p>
    )
}
if(error){
    return (
        <p>Something went wrong Sory</p>
    )
}
   return (
    <ul>
      {user.map((item) => (
        <UserItem key={item.id} useritem={item} />
      ))}
    </ul>
  );
     
    }

export default UserList;