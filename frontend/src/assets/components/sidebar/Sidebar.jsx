// import Conversations from "./Conversations";
// import LogoutButton from "./LogoutButton";
// import Conversation from "./Conversation";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
	return (
        <div>
            <SearchInput />
		    <div className='border-r border-slate-500 p-4 flex flex-col'>
            <div className='divider px-3'></div>
            <Conversations/>
            <LogoutButton/>			
		</div>
        </div>
	);
};
export default Sidebar;