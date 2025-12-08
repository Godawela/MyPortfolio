import logo from "../assets/image.png";



const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-12" src={logo} alt="logo" />
        </div>

        <div className="m-8 flex items-center justify-center gap-4 teaxt-2xl">
     
             <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
        <a href="#technologies" className="hover:text-blue-500 transition-colors">Technologies</a>
        <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
        <a href="#contact" className="hover:text-blue-500 transition-colors">Get in Touch</a>
        </div>
    </nav>
  )
}

export default Navbar