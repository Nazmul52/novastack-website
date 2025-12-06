import { Link } from "react-router-dom";
import { HiHome, HiArrowLeft } from "react-icons/hi";

const NotFound = () => {
  return (
    <div className="from-primary-50 to-secondary-50 flex min-h-[calc(100vh-4rem)] items-center justify-center bg-linear-to-br via-white px-4">
      <div className="text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="from-primary-600 to-secondary-600 mb-4 bg-linear-to-r bg-clip-text text-9xl font-bold text-transparent">
            404
          </h1>
          <div className="from-primary-600 to-secondary-600 mx-auto h-1 w-32 rounded-full bg-linear-to-r"></div>
        </div>

        {/* Message */}
        <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
          Page Not Found
        </h2>
        <p className="mx-auto mb-8 max-w-md text-lg text-gray-600">
          Oops! The page you're looking for doesn't exist. It might have been
          moved or deleted.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/"
            className="bg-primary-600 hover:bg-primary-700 inline-flex transform items-center justify-center gap-2 rounded-lg px-8 py-4 font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105"
          >
            <HiHome className="h-5 w-5" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="border-primary-100 text-primary-600 inline-flex transform items-center justify-center gap-2 rounded-lg border-2 bg-white px-8 py-4 font-semibold shadow-lg transition-all duration-200 hover:scale-105 hover:bg-gray-50"
          >
            <HiArrowLeft className="h-5 w-5" />
            Go Back
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="relative mt-16">
          <div className="bg-primary-200 animate-blob absolute left-1/4 h-32 w-32 rounded-full opacity-70 mix-blend-multiply blur-xl filter"></div>
          <div className="bg-secondary-200 animate-blob animation-delay-2000 absolute right-1/4 h-32 w-32 rounded-full opacity-70 mix-blend-multiply blur-xl filter"></div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
