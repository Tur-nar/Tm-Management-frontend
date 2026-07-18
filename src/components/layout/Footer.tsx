export default function Footer() {
    return (
        <footer className="bg-gray-950 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-8">
                <div className="text-center md:text-left">
                    <h3 className="text-3xl tracking-tight font-bold text-white mb-2 hover:text-cyan-400">TM-Management</h3>
                    <p className="text-gray-300">
                        Modern workspace for organizations to manage projects, collaborate with teams and improve productivity.
                    </p>
                </div>
                <div className="text-center md:text-left">
                    <h3 className="text-lg font-bold text-white mb-2 hover:text-cyan-400">Quick Links</h3>
                    <div className="flex flex-col items-center md:items-start space-y-2">
                        <a href="#" className="text-gray-300 hover:text-cyan-500 transition-colors duration-300">Home</a>
                        <a href="#" className="text-gray-300 hover:text-cyan-500 transition-colors duration-300">Features</a>
                        <a href="#" className="text-gray-300 hover:text-cyan-500 transition-colors duration-300">How It Works</a>
                        <a href="#" className="text-gray-300 hover:text-cyan-500 transition-colors duration-300">Reviews</a>
                        <a href="#" className="text-gray-300 hover:text-cyan-500 transition-colors duration-300">Login</a>
                    </div>
                </div>
                <div className="text-center md:text-left">
                    <h3 className="text-lg font-bold text-white mb-2 hover:text-cyan-400">Product</h3>
                    <div className="flex space-y-2 flex-col">
                        <a href="#" className="text-gray-300 hover:text-cyan-500 transition-colors duration-300">Pricing</a>
                        <a href="#" className="text-gray-300 hover:text-cyan-500 transition-colors duration-300">FAQ</a>
                        <a href="#" className="text-gray-300 hover:text-cyan-500 transition-colors duration-300">Request Demo</a>
                        <a href="#" className="text-gray-300 hover:text-cyan-500 transition-colors duration-300">Support</a>
                    </div>
                </div>
                <div className="text-center md:text-left">
                    <h3 className="text-lg font-bold text-white mb-2 hover:text-cyan-400 space-y-2">Contact Us</h3>
                    <div className="flex space-y-2 flex-col items-center md:items-start">
                        <p className="text-gray-300">Email: support@tm-management.com</p>
                        <p className="text-gray-300">Phone: +234 XXX XXX XXXX</p>
                        <p className="text-gray-300">Abuja, Nigeria</p>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto border-t border-gray-800 mt-8 pt-8">
                <p className="text-center text-gray-300 mt-8">&copy; {new Date().getFullYear()} TM-Management. Built for modern organizations. All rights reserved.</p>
            </div>
        </footer>
    );
}