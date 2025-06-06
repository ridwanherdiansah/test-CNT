import { useState, useEffect } from "react";
import { KeyRound, User, Mail, Headset } from 'lucide-react';
import { toast } from "sonner";

const Auth = () => {
    const [activeTab, setActiveTab] = useState('login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [forgotEmail, setForgotEmail] = useState('');

    useEffect(() => {
        const userData = localStorage.getItem('userData');
        if (userData) {
            window.location.href = '/home';
        }
    }, []);

    const handleSubmitLogin = () => {
        if (!email || !password) {
            toast("Missing Fields", {
                description: "Please fill in both email and password.",
            });
            return;
        }

        const userRegister = JSON.parse(localStorage.getItem('userRegister'));
        if (userRegister && userRegister.email === email && userRegister.password === password) {
            localStorage.setItem('userData', JSON.stringify(userRegister));
            window.location.href = '/home';
        } else {
            toast("Login Failed", {
                description: "Incorrect email or password. Please register first.",
            });
        }
    };


    const handleSubmitRegistrasi = () => {
        if (!name || !email || !phone || !password) {
            toast("Missing Fields", {
                description: "Please fill in all the fields to register.",
            });
            return;
        }

        const userRegis = { name, email, phone, password };
        localStorage.setItem('userRegister', JSON.stringify(userRegis));
        toast("Registration Successful", {
            description: "You can now login with your credentials.",
        });
        setActiveTab('login');
    };


    const renderContentAuth = () => {
        switch (activeTab) {
            case 'login':
                return (
                    <div className="space-y-6">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <User className="text-white" size={32} />
                            </div>
                            <h2 className="text-xl font-bold text-gray-800">Log in</h2>
                        </div>
                        <div className="space-y-6 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                            <div className="relative">
                                <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    placeholder="Email..."
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="relative">
                                <KeyRound className="absolute left-3 top-3 text-gray-400" size={20} />
                                <input
                                    type="password"
                                    placeholder="Password..."
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="border-2 rounded-xl p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                                <button onClick={handleSubmitLogin} className="text-xl font-bold text-center w-full">Login</button>
                            </div>
                            <div className="text-center">
                                <span
                                    onClick={() => setActiveTab('forgotPsw')}
                                    className="text-blue-600/100 cursor-pointer"> Lupa Password ?</span>
                            </div>
                            <div className="text-center">
                                Belum punya akun?
                                <span onClick={() => setActiveTab('register')} className="text-blue-600/100 cursor-pointer"> Daftar Disini</span>
                            </div>
                        </div>

                    </div>
                );

            case 'register':
                return (
                    <div className="space-y-6">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <User className="text-white" size={32} />
                            </div>
                            <h2 className="text-xl font-bold text-gray-800">Registrasi</h2>
                        </div>
                        <div className="space-y-6 bg-white rounded-xl shadow-sm border border-gray-100 p-6">

                            <div className="relative">
                                <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    placeholder="Email..."
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="relative">
                                <Headset className="absolute left-3 top-3 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    placeholder="No Telepon..."
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="relative">
                                <User className="absolute left-3 top-3 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    placeholder="Name..."
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="relative">
                                <KeyRound className="absolute left-3 top-3 text-gray-400" size={20} />
                                <input
                                    type="password"
                                    placeholder="Password..."
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="border-2 rounded-xl p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                                <button onClick={handleSubmitRegistrasi} className="text-xl font-bold text-center w-full">Registrasi</button>
                            </div>
                            <div className="text-center">
                                Sudah punya akun?
                                <span onClick={() => setActiveTab('login')} className="text-blue-600/100 cursor-pointer"> Login Disini</span>
                            </div>
                        </div>
                    </div>
                );
            case 'forgotPsw':
                return (
                    <div className="space-y-6">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <User className="text-white" size={32} />
                            </div>
                            <h2 className="text-xl font-bold text-gray-800">Forgot Password</h2>
                        </div>
                        <div className="space-y-6 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                            <div className="relative">
                                <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    placeholder="Email..."
                                    value={forgotEmail}
                                    onChange={(e) => setForgotEmail(e.target.value)}
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
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 max-w-md mx-auto">
            <main className="px-4 py-6 pb-20">
                {renderContentAuth()}
            </main>
        </div>
    );
};

export default Auth;
