import { useState } from 'react';
import { toast } from "@/hooks/use-toast";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Auth from './auth/Login';
import PrivatePages from './private';


const isLoggedIn = () => {
  return !!localStorage.getItem("userData");
};

const PrivateRoute = ({ element }: { element: JSX.Element }) => {
  return isLoggedIn() ? element : <Navigate to="/login" />;
};

const MainPages = () => {
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

  // const renderContent = () => {
  //   switch (activeTab) {
  //     case 'library':
  //       return (

  //       );
  //     case 'discover':
  //       return (

  //   );
  // case 'reading':
  //   return (
  //     <div className="space-y-4">
  //       <h2 className="text-xl font-bold text-gray-800">Currently Reading</h2>
  //       <div className="space-y-4">
  //         {currentlyReading.map((book) => (
  //           <ProgressCard key={book.id} book={book} />
  //         ))}
  //       </div>
  //     </div>
  //       );
  //     case 'profile':
  //       return (



  //       );
  //     case 'settings':
  //       return <UserSettings />
  //     default:
  //       return (
  //         <div className="space-y-6">
  //           <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 text-white">
  //             <h2 className="text-xl font-bold mb-2">Welcome back!</h2>
  //             <p className="opacity-90">You've read {readingStats.pagesThisWeek} pages this week</p>
  //             <div className="mt-4 bg-white/20 rounded-full h-2">
  //               <div className="bg-white rounded-full h-2 w-3/4"></div>
  //             </div>
  //           </div>

  //           <div>
  //             <h3 className="text-lg font-semibold text-gray-800 mb-3">Continue Reading</h3>
  //             <div className="space-y-3">
  //               {currentlyReading.slice(0, 2).map((book) => (
  //                 <ProgressCard key={book.id} book={book} />
  //               ))}
  //             </div>
  //           </div>

  //           <div>
  //             <h3 className="text-lg font-semibold text-gray-800 mb-3">Recommended for You</h3>
  //             <div className="grid grid-cols-2 gap-3">
  //               {books.slice(0, 4).map((book) => (
  //                 <BookCard key={book.id} book={book} variant="compact" />
  //               ))}
  //             </div>
  //           </div>
  //         </div>
  //       );
  //   }
  // };

  return <BrowserRouter>
    <Routes>
      {/* Public route */}
      <Route path="/login" element={<Auth />} />
      <Route path="/" element={<Auth />} />

      {/* Protected route */}
      <Route path="/*" element={<PrivatePages />} />

      {/* <Route path="/library" element={<PrivateRoute element={<Index />}/>} /> */}
      {/* TODO: buat halaman baru dibawah .... */}

    </Routes>
  </BrowserRouter>
};

export default MainPages;
