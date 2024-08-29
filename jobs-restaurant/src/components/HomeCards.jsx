import { Link } from "react-router-dom";
import Card from "./Card";

const HomeCards = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card>
            <h2 className="text-2xl font-bold text-blue-900">For Chefs</h2>
            <p className="mt-2 mb-4 text-blue-600">
              The desired jobs are waiting to start your career
            </p>
            <Link
              to="/jobs"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Browse Jobs
            </Link>
          </Card>
          <Card bg="bg-indigo-100">
            <h2 className="text-2xl font-bold text-blue-900">For Employers</h2>
            <p className="mt-2 mb-4 text-blue-600">
              Add the job to find the suitable chef for the role
            </p>
            <Link
              to="/add-job"
              className="inline-block bg-green-600 text-white rounded-lg px-4 py-2 hover:bg-green-500"
            >
              Add Job
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default HomeCards;
