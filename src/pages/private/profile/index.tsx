import { readingStats } from "@/data/dummyData";
import { Activity, Calendar, Clock, Download, LogOut, Shield, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";


export default function ProfilePage() {
    const navigate = useNavigate();
    const handleLogout = () => {
        // Hapus semua item dari localStorage
        localStorage.clear();

        // Tampilkan toast
        toast("You have been logged out", {
            description: "Your session has ended. Please login again to continue.",
            action: {
                label: "Dismiss",
                onClick: () => console.log("Toast dismissed"),
            },
        });

        // Optional: redirect ke halaman login
        navigate("/login");
    };

    if (!localStorage.getItem('userData')) {
        location.href = '/login'
    }

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
                            onClick={() => navigate('settings')}
                            variant="outline"
                            className="w-full h-12 border-2 border-gray-200 hover:bg-gray-50 rounded-xl transition-all duration-200"
                        >
                            <Shield className="w-5 h-5 mr-3 text-gray-600" />
                            Manage User Settings
                        </Button>

                        <Button
                            onClick={handleLogout}
                            className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
                        >
                            <LogOut className="w-5 h-5 mr-3" />
                            Logout
                        </Button>
                    </div>
                </div>

            </div>

        </div>
    )
}