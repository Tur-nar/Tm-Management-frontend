export default function Navbar() {
    return (
        <nav className="w-full border-b flex justify-between items-center px-8 py-5 max-w-7xl mx-auto">
             <div><h2 className="text-2xl font-bold tracking-tight">TM-Management</h2></div>

            <ul className="flex items-center gap-10">
                <li className="hover:text-cyan-500"><a href="#">Features</a></li>
                <li className="hover:text-cyan-500"><a href="#">How it Works</a></li>
                <li className="hover:text-cyan-500"><a href="#">Pricing</a></li>
                <li className="hover:text-cyan-500"><a href="#">FAQ</a></li>
            </ul>

            <div className="flex items-center gap-3">
                <a href ="#">Login</a>
                <a href ="#" className ="px-5 py-3 rounded-lg font-medium">Get Started</a>
            </div>
        </nav>
    );
}