
import { Bell, Search, SettingsIcon } from 'lucide-react';

interface HeaderNavProps {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>
}

const HeaderNav = ({ activeTab,setActiveTab }: HeaderNavProps) => {
  const getTitle = () => {
    switch (activeTab) {
      case 'settings': return 'User Setting';
      case 'library': return 'My Library';
      case 'discover': return 'Discover';
      case 'reading': return 'Reading';
      case 'profile': return 'Profile';
      default: return 'BookTracker';
    }
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 px-4 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">{getTitle()}</h1>
        <div className="flex items-center space-x-3">
          {activeTab !== 'discover' && (
            <button className="p-2 text-gray-600 hover:text-gray-800 transition-colors">
              <Search size={20} />
            </button>
          )}
          <button className="p-2 text-gray-600 hover:text-gray-800 transition-colors relative" onClick={() => setActiveTab("settings")}>
            <SettingsIcon size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;
