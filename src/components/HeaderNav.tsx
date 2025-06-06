import { useNavigate, useLocation } from 'react-router-dom';
import { TypePath } from '@/context/private-context';
import { Book, Home, LucideProps, Search, SettingsIcon, TrendingUp, User } from 'lucide-react';

interface HeaderNavProps {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

type NavItem = {
  id: TypePath;
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
  label: string;
};

const HeaderNav = () => {
  const navigate = useNavigate();
  const pathname = useLocation().pathname;

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 px-4 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800"></h1>
        <div className="flex items-center space-x-3">
          {pathname !== '/discover' && (
            <button
              className="p-2 text-gray-600 hover:text-gray-800 transition-colors"
              onClick={() => {
                navigate('/discover');
              }}
            >
              <Search size={20} />
            </button>
          )}
          {pathname !== '/profile/settings' && (
            <button
              className="p-2 text-gray-600 hover:text-gray-800 transition-colors relative"
              onClick={() => navigate('/profile/settings')}
            >
              <SettingsIcon size={20} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;
