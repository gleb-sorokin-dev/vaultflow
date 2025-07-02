import vaultflow from "@/assets/vaultflow.svg";

export default function Footer() {
  return (
    <footer className="w-full py-16 bg-[#0B081C] border-t border-[#1E1B34] mt-30">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold text-white mb-6">
              <img src={vaultflow} alt="vaultflow logo" />
            </h3>
            <p className="text-gray-400 max-w-md">
              Advanced analytics platform for data-driven teams.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-medium text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 hover:text-blue-400 transition-colors">
                <a href="mailto:work@vaultflow.com">Work inquiries</a>
              </li>
              <li className="text-gray-400 hover:text-blue-400 transition-colors">
                <a href="mailto:press@vaultflow.com">PR & speaking</a>
              </li>
              <li className="text-gray-400 hover:text-blue-400 transition-colors">
                <a href="mailto:newbusiness@vaultflow.com">New business</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium text-white mb-4">Connect</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 hover:text-blue-400 transition-colors">
                <a href="#">Careers</a>
              </li>
              <li className="text-gray-400 hover:text-blue-400 transition-colors">
                <a href="#">Twitter</a>
              </li>
              <li className="text-gray-400 hover:text-blue-400 transition-colors">
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium text-white mb-4">Visit</h4>
            <p className="text-gray-400">
              398 Tith Street, Floor 2<br />
              San Francisco, CA 94103
            </p>
          </div>
        </div>

        <div className="my-10 h-px bg-gradient-to-r from-transparent via-[#2A2548] to-transparent"></div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2023 Vaultflow. All rights reserved.
          </p>

          <div className="mt-4 md:mt-0 flex items-center space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
