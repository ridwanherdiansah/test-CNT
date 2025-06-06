import BookCard from "@/components/BookCard";
import { Search } from "lucide-react";
import { books } from "@/data/dummyData";

export default function DiscoverPage() {
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
    )
}