import BookCard from "@/components/BookCard"
import BrowseLibrary from "@/components/BrowseLibrary"
import { Book, Library, Plus } from "lucide-react"
import { useState } from "react";
import { books } from "@/data/dummyData";

export default function LibraryPage() {
    const [libraryView, setLibraryView] = useState('my-books'); // 'my-books' or 'browse'
    return (
        <div className="space-y-4">
            {/* Library Navigation */}
            <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
                <button
                    onClick={() => setLibraryView('my-books')}
                    className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-md text-sm font-medium transition-colors ${libraryView === 'my-books'
                        ? 'bg-white text-blue-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-800'
                        }`}
                >
                    <Book size={16} />
                    <span>My Books</span>
                </button>
                <button
                    onClick={() => setLibraryView('browse')}
                    className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-md text-sm font-medium transition-colors ${libraryView === 'browse'
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
    )

}