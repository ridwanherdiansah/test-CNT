import { currentlyReading } from "@/data/dummyData";
import ProgressCard from "@/components/ProgressCard";

export default function ReadingPage() {
    return (
        <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-800">Currently Reading</h2>
            <div className="space-y-4">
                {currentlyReading.map((book) => (
                    <ProgressCard key={book.id} book={book} />
                ))}
            </div>
        </div>
    )
}