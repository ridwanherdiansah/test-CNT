import BookCard from "@/components/BookCard";
import ProgressCard from "@/components/ProgressCard";
import { books, currentlyReading, readingStats } from "@/data/dummyData";

export default function HomePage() {
    return <div className="space-y-6">
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
}