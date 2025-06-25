import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      {/* You can add header/nav/footer here later */}
      <Outlet />
    </div>
  );
}
