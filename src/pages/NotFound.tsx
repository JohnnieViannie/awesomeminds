import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background pt-16">
      <div className="text-center px-6">
        <h1 className="mb-4 font-heading font-black text-5xl">404</h1>
        <Link to="/" className="font-heading font-semibold text-primary hover:text-accent">
          Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
