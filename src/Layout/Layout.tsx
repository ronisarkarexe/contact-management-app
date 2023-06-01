import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content bg-slate-200 p-5">
          <Outlet />
        </div>
        <div className="drawer-side bg-white-300">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content">
            <h2 className="text-1xl font-medium ml-3 mb-2.5">
              <Link to="/">CONTACT MANAGEMENT</Link>
            </h2>
            <li>
              <Link to="/dashboard/contact">Contact</Link>
            </li>
            <li>
              <Link to="/dashboard/charts-maps">Charts and Maps</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Layout;
