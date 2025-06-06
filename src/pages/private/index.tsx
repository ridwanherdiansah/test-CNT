import { Route, Routes } from "react-router-dom";
import HomePage from "./home";
import NotFound from "../NotFound";
import BottomNav from "@/components/BottomNav";
import ProviderPrivateContext from "@/context/private-context";
import LibraryPage from "./library";
import DiscoverPage from "./discover";
import ProfilePage from "./profile";
import SettingPage from "./profile/UserSettings";

export default function PrivatePages() {
    if (!localStorage.getItem('userData')) {
        location.href = '/login'
        return null;
    }
    return <ProviderPrivateContext>
        <div className="min-h-screen bg-gray-50 max-w-md mx-auto">
            <main className="px-4 py-6 pb-20">
                <Routes>
                    <Route path="home" element={<HomePage />} />
                    <Route path="library" element={<LibraryPage />} />
                    <Route path="discover" element={< DiscoverPage />} />
                    <Route path="profile" element={<ProfilePage />} />
                    <Route path="profile/settings" element={<SettingPage />} />
                    <Route path="*" element={<NotFound />} />

                </Routes>
            </main>

            <BottomNav />
        </div>
    </ProviderPrivateContext>
}