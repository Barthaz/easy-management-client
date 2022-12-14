import React from 'react';
import { Link, NavLink} from 'react-router-dom';
import { MdOutlineCancel } from 'react-icons/md';
import { IoMdContacts } from 'react-icons/io';
import { AiOutlineCalendar, AiOutlineStock, AiOutlineHome, AiOutlineContainer } from 'react-icons/ai';
import { BsKanban, BsBarChart } from 'react-icons/bs';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useStateContext } from '../contexts/ContextProvider';
import logo from '../data/EMLogo-small.png';

const links = [
  {
    title: 'Pages',
    links: [
      {
        name: 'home',
        icon: <AiOutlineHome />,
      },
    ],
  },
  {
    title: 'Workflow',
    links: [
      {
        name: 'projects',
        icon: <AiOutlineContainer />,
      },
      {
        name: 'team',
        icon: <IoMdContacts />,
      },
      {
        name: 'calendar',
        icon: <AiOutlineCalendar />,
      },
      {
        name: 'kanban',
        icon: <BsKanban />,
      }
    ],
  },
  {
    title: 'Data',
    links: [
      {
        name: 'analytics',
        icon: <AiOutlineStock />,
      },
      {
        name: 'logs',
        icon: <BsBarChart />,
      }
    ],
  },
];

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 bg-blue';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  const handleCloseSidebar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false)
    }
  }

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link to="/" className="items-center gap-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900" onClick={handleCloseSidebar}>
              <img src={ logo } className="flex h-9" alt=""/>
              <span className="text-14">EasyManagement</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button type="button" onClick={() => setActiveMenu(prev => !prev)} className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden">
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 m-3 mt-4 uppercase">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink to={`/${link.name}`} key={link.name} onClick={handleCloseSidebar} className={({ isActive }) => isActive ? activeLink : normalLink}>
                    {link.icon}
                    <span className="capitalize">
                      {link.name}
                    </span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Sidebar