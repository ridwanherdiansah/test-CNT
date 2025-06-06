
import { useState } from "react";
import { Camera, User, Mail, Lock, Bell, Moon, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "@/hooks/use-toast";

const UserSettings = () => {
  const dataUser = JSON.parse(localStorage.getItem('userData'));
  const [fullName, setFullName] = useState(dataUser.fullName);
  const [email] = useState(dataUser.email);
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [profileImage, setProfileImage] = useState("");

  const handleSaveChanges = () => {
    toast({
      title: "Settings saved",
      description: "Your preferences have been updated successfully.",
    });
  };

  const handleChangePassword = () => {
    toast({
      title: "Password change",
      description: "Password change functionality would be implemented here.",
    });
  };

  const handleEditPhoto = () => {
    toast({
      title: "Photo upload",
      description: "Photo upload functionality would be implemented here.",
    });
  };

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      {/* Profile Section */}
      <div className="px-6 py-8 border-b border-gray-100">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative">
            <Avatar className="w-24 h-24 border-4 border-white shadow-lg">
              <AvatarImage src={profileImage} alt="Profile" />
              <AvatarFallback className="text-xl bg-gradient-to-br from-blue-400 to-purple-500 text-white">
                SJ
              </AvatarFallback>
            </Avatar>
            <Button
              size="sm"
              variant="secondary"
              className="absolute -bottom-2 -right-2 rounded-full w-10 h-10 p-0 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              onClick={handleEditPhoto}
            >
              <Camera className="w-4 h-4" />
            </Button>
          </div>
          <Button
            variant="outline"
            className="text-blue-600 border-blue-200 hover:bg-blue-50 transition-colors duration-200"
            onClick={handleEditPhoto}
          >
            Edit Photo
          </Button>
        </div>
      </div>

      {/* Settings Form */}
      <div className="px-6 py-6 space-y-6">
        {/* Full Name */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <User className="w-4 h-4 mr-2 text-blue-500" />
            Full Name
          </label>
          <Input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="border-gray-200 focus:border-blue-400 focus:ring-blue-400 transition-colors duration-200 h-12"
            placeholder="Enter your full name"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <Mail className="w-4 h-4 mr-2 text-blue-500" />
            Email
          </label>
          <Input
            value={email}
            readOnly
            className="border-gray-200 bg-gray-50 text-gray-600 h-12 cursor-not-allowed"
          />
        </div>

        {/* Change Password */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <Lock className="w-4 h-4 mr-2 text-blue-500" />
            Password
          </label>
          <Button
            variant="outline"
            className="w-full h-12 justify-start text-left border-gray-200 hover:bg-gray-50 transition-colors duration-200"
            onClick={handleChangePassword}
          >
            Change Password
          </Button>
        </div>

        {/* Notification Preferences */}
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center space-x-3">
            <Bell className="w-5 h-5 text-blue-500" />
            <div>
              <p className="font-medium text-gray-900">Notifications</p>
              <p className="text-sm text-gray-500">Receive push notifications</p>
            </div>
          </div>
          <Switch
            checked={notifications}
            onCheckedChange={setNotifications}
            className="data-[state=checked]:bg-blue-500"
          />
        </div>

        {/* Dark Mode Toggle */}
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center space-x-3">
            <Moon className="w-5 h-5 text-blue-500" />
            <div>
              <p className="font-medium text-gray-900">Dark Mode</p>
              <p className="text-sm text-gray-500">Switch to dark theme</p>
            </div>
          </div>
          <Switch
            checked={darkMode}
            onCheckedChange={setDarkMode}
            className="data-[state=checked]:bg-blue-500"
          />
        </div>
      </div>

      {/* Save Button */}
      <div className="px-6 pb-8 pt-4">
        <Button
          onClick={handleSaveChanges}
          className="w-full h-12 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
        >
          <Save className="w-5 h-5 mr-2" />
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default UserSettings;