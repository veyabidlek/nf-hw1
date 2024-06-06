import data from "../../../public/data.json";
import Link from "next/link";
export default () => {
  return (
    <section className="mt-12 max-w-screen-lg mx-auto px-4 md:px-8">
      <div>
        <h1 className="text-gray-800 text-3xl font-semibold">Blog</h1>
      </div>

      <ul className="mt-12 space-y-6">
        {data.map((item, idx) => (
          <li key={idx} className="p-5 bg-white rounded-md shadow-sm">
            <Link href={`/blog/${item.id}`}>
              <div>
                <div className="justify-between sm:flex">
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-cyan-600">
                      {item.title}
                    </h3>

                    <p className="text-gray-500 mt-2 pr-2">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-5 space-y-4 text-sm sm:mt-0 sm:space-y-2">
                    <span className="flex items-center text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item.date}
                    </span>
                    <span className="flex items-center text-gray-500">
                      {item.author}
                    </span>
                  </div>
                </div>
                <div className="mt-4 items-center space-y-4 text-sm sm:flex sm:space-x-4 sm:space-y-0">
                  <span className="flex items-center text-gray-500">
                    #{item.id}
                  </span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
