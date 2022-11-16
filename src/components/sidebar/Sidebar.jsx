import c from './Sidebar.module.css';
import { FiX } from 'react-icons/fi';

const Sidebar = ({isSidebarOpen, setIsSidebarOpen}) => {
  return (
    <div className={isSidebarOpen === true ? `${c.sidebar} ${c.active}` : `${c.sidebar}`}>
        <FiX className={c.close} onClick={() => {setIsSidebarOpen(false)}}/>
    </div>
  )
}

export default Sidebar