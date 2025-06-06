import { useState } from "react";
import { KeyRound, User, Mail, Headset } from 'lucide-react';

const Auth = () => {
    const [activeTab, setActiveTab] = useState('login');

    const renderContentAuth = () => {
        switch (activeTab) {
            case 'login' : 
                return (
                    <div className="space-y-6">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <User className="text-white" size={32} />
                            </div>
                            <h2 className="text-xl font-bold text-gray-800">Log in</h2>
                            <p className="text-gray-600">Reading enthusiast since 2020</p>
                        </div>
                        
                        <div className="relative">
                            <User className="absolute left-3 top-3 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Username..."
                                className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="relative">
                            <KeyRound className="absolute left-3 top-3 text-gray-400" size={20} />
                            <input
                                type="password"
                                placeholder="Password..."
                                className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="border-2 rounded-xl p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl text-white">
                            <button 
                            onClick={() => {
                                const dummyUser =  {
                                    id      : 1,
                                    fullName : 'ridwan',
                                    email: 'ridwan@gmail.com',
                                    role : 'admin'
                                }

                                localStorage.setItem('userData', JSON.stringify(dummyUser));
                                // reload param 
                                location.href = "/"
                            }}
                            className="text-xl font-bold text-center w-full">Login</button>
                        </div>
                        <div className="text-center">
                            <span
                            onClick={() => setActiveTab('forgotPsw')}
                            className="text-blue-600/100 cursor-pointer"> Lupa Password ?</span>
                        </div>
                        <div className="text-center">
                            Belum punya akun ? 
                            <span
                            onClick={() => setActiveTab('register')}
                            className="text-blue-600/100 cursor-pointer"> Daftar Disini</span>
                        </div>
                    </div>
                );
            case 'register' :
                return (
                    <div className="space-y-6">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <User className="text-white" size={32} />
                            </div>
                            <h2 className="text-xl font-bold text-gray-800">Registrasi</h2>
                            <p className="text-gray-600">Reading enthusiast since 2020</p>
                        </div>
                        
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Email..."
                                className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="relative">
                            <Headset className="absolute left-3 top-3 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="No Telepon..."
                                className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="relative">
                            <User className="absolute left-3 top-3 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Name..."
                                className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="relative">
                            <KeyRound className="absolute left-3 top-3 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Password..."
                                className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="relative">
                            <KeyRound className="absolute left-3 top-3 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Confirmasi Telepon..."
                                className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="border-2 rounded-xl p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl text-white">
                            <button className="text-xl font-bold text-center w-full">Registrasi</button>
                        </div>
                        <div className="text-center">
                            Sudah punya akun ? 
                            <span
                            onClick={() => setActiveTab('login')}
                            className="text-blue-600/100 cursor-pointer"> Login Disini</span>
                        </div>
                    </div>
                );
            case 'forgotPsw' :
                return (
                    <div className="space-y-6">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <User className="text-white" size={32} />
                            </div>
                            <h2 className="text-xl font-bold text-gray-800">Forgot Password</h2>
                            <p className="text-gray-600">Reading enthusiast since 2020</p>
                        </div>
                        
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Username..."
                                className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="border-2 rounded-xl p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl text-white">
                            <button className="text-xl font-bold text-center w-full">Forgot Password</button>
                        </div>
                        <div className="text-center">
                            <span
                            onClick={() => setActiveTab('login')}
                            className="text-blue-600/100 cursor-pointer"> Back</span>
                        </div>
                    </div>
                );
        }

    }
    return(
    <div className="min-h-screen bg-gray-50 max-w-md mx-auto">
      
      <main className="px-4 py-6 pb-20">
        {renderContentAuth()}
      </main>

    </div>
    );
}

export default Auth;