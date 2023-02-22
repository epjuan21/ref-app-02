import { Link } from "react-router-dom";

function Breadcrumbs({ items }) {
  return (
    <nav className="flex mb-6" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {items.map((item, index) => {
          const isLastItem = index === items.length - 1;

          return (
            <li key={item.label} className="inline-flex items-center">
              {item.to && !isLastItem ? (
                <Link
                  to={item.to}
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                >
                  {item.icon && (
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d={item.icon} />
                    </svg>
                  )}
                  {item.label}
                </Link>
              ) : (
                <div className="flex items-center">
                  {item.icon && (
                    <svg
                      aria-hidden="true"
                      className="w-6 h-6 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d={item.icon} />
                    </svg>
                  )}
                  <span className="ml-1 text-sm font-medium text-gray-700 md:ml-2 dark:text-gray-400 ">
                    {item.label}
                  </span>
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumbs