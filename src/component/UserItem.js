const UserItem = ({ useritem }) => {
    
    return (
        <li>
            <p>First Name:{useritem.name.first} Last Name:{useritem.name.last}</p>
            
        </li>
    
    )
}
export default UserItem;