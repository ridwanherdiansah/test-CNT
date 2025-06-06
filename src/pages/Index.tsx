import { useState } from 'react';
import { Book, Search, User, TrendingUp, Plus, Library } from 'lucide-react';
import BookCard from '../components/BookCard';
import ProgressCard from '../components/ProgressCard';
import BottomNav from '../components/BottomNav';
import HeaderNav from '../components/HeaderNav';
import BrowseLibrary from '../components/BrowseLibrary';
import { books, currentlyReading, readingStats } from '../data/dummyData';
import UserSettings from './user/UserSettings';
import { Calendar, Clock, Activity } from "lucide-react";
import { Download, Shield, FileText, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [libraryView, setLibraryView] = useState('my-books'); // 'my-books' or 'browse'
  const handleExportData = () => {
    toast({
      title: "Data Export",
      description: "Your data export has been started. You'll receive an email when ready.",
    });
  };

  const handleUserPrivacy = () => {
    toast({
      title: "Privacy Settings",
      description: "Privacy management functionality would be implemented here.",
    });
  };
  
  const renderContent = () => {
    switch (activeTab) {
      case 'library':
        return (
          <div className="space-y-4">
            {/* Library Navigation */}
            <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setLibraryView('my-books')}
                className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  libraryView === 'my-books'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <Book size={16} />
                <span>My Books</span>
              </button>
              <button
                onClick={() => setLibraryView('browse')}
                className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  libraryView === 'browse'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <Library size={16} />
                <span>Browse</span>
              </button>
            </div>

            {/* Content based on selected view */}
            {libraryView === 'my-books' ? (
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold text-gray-800">My Library</h2>
                  <button 
                    onClick={() => setLibraryView('browse')}
                    className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
                  >
                    <Plus size={20} />
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {books.slice(0, 6).map((book) => (
                    <BookCard key={book.id} book={book} variant="library" />
                  ))}
                </div>
              </div>
            ) : (
              <BrowseLibrary />
            )}
          </div>
        );
      case 'discover':
        return (
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search books..."
                className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <h2 className="text-xl font-bold text-gray-800">Trending Now</h2>
            <div className="space-y-3">
              {books.slice(3, 8).map((book) => (
                <BookCard key={book.id} book={book} variant="discover" />
              ))}
            </div>
          </div>
        );
      case 'reading':
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-800">Currently Reading</h2>
            <div className="space-y-4">
              {currentlyReading.map((book) => (
                <ProgressCard key={book.id} book={book} />
              ))}
            </div>
          </div>
        );
      case 'profile':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <User className="text-white" size={32} />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Book Lover</h2>
              <p className="text-gray-600">Reading enthusiast since 2020</p>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <div className="text-2xl font-bold text-blue-600">{readingStats.totalBooks}</div>
                <div className="text-sm text-gray-600">Books Read</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-xl">
                <div className="text-2xl font-bold text-green-600">{readingStats.currentStreak}</div>
                <div className="text-sm text-gray-600">Day Streak</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-xl">
                <div className="text-2xl font-bold text-purple-600">{readingStats.avgRating}</div>
                <div className="text-sm text-gray-600">Avg Rating</div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Activity className="w-5 h-5 mr-2 text-blue-500" />
                Activity Overview
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Login Frequency</p>
                      <p className="text-sm text-gray-500">Daily average</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-blue-600">4.2/day</p>
                    <p className="text-xs text-green-600">↑ 12% this week</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Last Active</p>
                      <p className="text-sm text-gray-500">Most recent session</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-purple-600">2h ago</p>
                    <p className="text-xs text-gray-500">Dec 6, 2:30 PM</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <p className="text-lg font-bold text-green-600">89%</p>
                    <p className="text-xs text-gray-500">Uptime</p>
                  </div>
                  <div className="text-center p-3 bg-orange-50 rounded-lg">
                    <p className="text-lg font-bold text-orange-600">12m</p>
                    <p className="text-xs text-gray-500">Avg Session</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Data & Privacy</h3>
                
                <div className="space-y-3">
                  <Button
                    onClick={handleExportData}
                    className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    <Download className="w-5 h-5 mr-3" />
                    Export My Data
                  </Button>
                  
                  <Button
                    onClick={() => setActiveTab('settings')}
                    variant="outline"
                    className="w-full h-12 border-2 border-gray-200 hover:bg-gray-50 rounded-xl transition-all duration-200"
                  >
                    <Shield className="w-5 h-5 mr-3 text-gray-600" />
                    Manage User Settings
                  </Button>
                </div>
              </div>

            </div>
            
          </div>

          
        );
      case 'settings':
        return <UserSettings/>
        default:
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 text-white">
              <h2 className="text-xl font-bold mb-2">Welcome back!</h2>
              <p className="opacity-90">You've read {readingStats.pagesThisWeek} pages this week</p>
              <div className="mt-4 bg-white/20 rounded-full h-2">
                <div className="bg-white rounded-full h-2 w-3/4"></div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Continue Reading</h3>
              <div className="space-y-3">
                {currentlyReading.slice(0, 2).map((book) => (
                  <ProgressCard key={book.id} book={book} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Recommended for You</h3>
              <div className="grid grid-cols-2 gap-3">
                {books.slice(0, 4).map((book) => (
                  <BookCard key={book.id} book={book} variant="compact" />
                ))}
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 max-w-md mx-auto">
      <HeaderNav activeTab={activeTab} setActiveTab={setActiveTab}/>
      
      <main className="px-4 py-6 pb-20">
        {renderContent()}
      </main>

      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default Index;
