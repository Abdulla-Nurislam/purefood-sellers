import { Outlet, NavLink, Navigate } from "react-router";
import { LayoutDashboard, Package, ShoppingBag, CreditCard, User } from "lucide-react";
import { cn } from "../utils";
import { useUser } from "../context/UserContext";

export function Layout() {
  const { isAuthenticated } = useUser();

  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  const navItems = [
    { icon: LayoutDashboard, label: "Главная", to: "/" },
    { icon: Package, label: "Мои товары", to: "/products" },
    { icon: ShoppingBag, label: "Заказы", to: "/orders" },
    { icon: CreditCard, label: "Выплаты", to: "/payments" },
    { icon: User, label: "Профиль", to: "/profile" },
  ];

  return (
    <div className="mx-auto w-full md:max-w-[400px] h-[100dvh] bg-gray-50 flex flex-col relative md:border-x md:border-gray-200 md:shadow-2xl overflow-hidden font-sans">
      <div className="flex-1 overflow-y-auto pb-20 scroll-smooth">
        <Outlet />
      </div>

      <nav className="absolute bottom-0 w-full bg-white/90 backdrop-blur-md border-t border-gray-200 px-2 py-3 pb-[calc(env(safe-area-inset-bottom)+12px)] flex justify-between items-center z-50">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            className={({ isActive }) =>
              cn(
                "flex flex-col items-center justify-center w-full space-y-1 transition-colors",
                isActive ? "text-emerald-600" : "text-gray-400 hover:text-gray-600"
              )
            }
          >
            <item.icon className="h-6 w-6" strokeWidth={2} />
            <span className="text-[10px] font-medium leading-none tracking-tight">
              {item.label}
            </span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
