import { useContext } from "react";
import { MenuContext } from "../../MenuContext";
import Navigation from "./Navigation";

function OffCanvasMenu() {

  const { isOpen, toggleMenu } = useContext(MenuContext)

  return (
    <div className={`fixed inset-0 overflow-hidden z-10 ${isOpen ? "block" : "hidden"}`}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={toggleMenu}></div>
        <section className="absolute inset-y-0 left-0 max-w-full flex" aria-labelledby="slide-over-heading">
          <div className="relative w-screen max-w-md">
            <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
              <div className="px-4 sm:px-6">
                <h2 className="text-lg font-medium text-gray-900" id="slide-over-heading">
                  Referencias
                </h2>
                <button className="float-right" onClick={toggleMenu}>
                  <span className="sr-only">Close panel</span>
                  <svg
                    className="h-6 w-6 text-gray-500 hover:text-gray-400 transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="mt-6 relative flex-1 px-4 sm:px-6">
                <div className="absolute inset-0 px-4 sm:px-6">
                  <div className="h-full border-2 border-dashed border-gray-200">
                    <Navigation />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default OffCanvasMenu;
