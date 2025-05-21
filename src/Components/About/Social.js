import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Social() {
  return (
    <div className="flex flex-col items-center justify-center py-16 bg-white">
      <h2 className="text-3xl font-bold mb-6">Let's Get Social</h2>
      <div className="flex space-x-6">
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-blue-500 transition-transform transform hover:scale-110 border border-gray-300 rounded-full p-3"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-pink-500 transition-transform transform hover:scale-110 border border-gray-300 rounded-full p-3"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-blue-600 transition-transform transform hover:scale-110 border border-gray-300 rounded-full p-3"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </div>
  );
}
