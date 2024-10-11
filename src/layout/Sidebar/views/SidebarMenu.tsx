"use client";

import SimpleArrowIcon from "@/assets/icons/SimpleArrowIcon";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { ISidebarMenu, TRoutes } from "../interface/interfaces";
import DiskIcon from "@/assets/icons/DiskIcon";
import { TiDocumentText } from "react-icons/ti";
import { FaCalculator } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";

function SidebarMenu({ mouseHover, open }: ISidebarMenu) {
  const pathname = usePathname();
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };
  const id =
    typeof window !== "undefined" ? window.localStorage.getItem("id") : "";
  const [indexOf, setIndexOf] = useState<{ index: number; open: boolean }>({
    index: -1,
    open: false,
  });

  const routes = useMemo(() => {
    let tempRoute: TRoutes[] = [
      {
        isShow: true,
        name: "history",
        path: "/panel/journal",
        title: "ژورنال ها",
        icon: <TiDocumentText className="text-2xl" />,
      },
      {
        isShow: true,
        name: "history",
        path: "/panel/history",
        title: "تاریخچه ترید",
        icon: <DiskIcon className="w-6 h-6" />,
      },
      {
        isShow: true,
        name: "calculator",
        path: "/panel/calculator",
        title: "ماشین حساب",
        icon: <FaCalculator className="text-xl" />,
      },
      {
        isShow: true,
        name: "smooth",
        path: "/panel/smooth",
        title: "مدریت سرمایه",
        icon: <MdManageAccounts className="text-2xl" />,
      },
    ];
    tempRoute = tempRoute.map((route, index) => {
      route.isShow = true;
      if (route.path === 1) {
        route.children.map((child, index2) => {
          if (open || mouseHover) {
            if (indexOf.index === index) {
              route.isOpen = indexOf.open;
            } else if (pathname === child.path) {
              route.isOpen = true;
            }
          } else {
            route.isOpen = false;
          }
          return child;
        });
      }
      return route;
    });

    return [...tempRoute];
  }, [open, mouseHover, pathname, indexOf, id]);

  return (
    <>
      <ul className="w-56 flex flex-col gap-2 justify-between pt-6 px-2">
        {routes.map((route: TRoutes, index) => {
          if (route.isShow) {
            if (route.path !== 1) {
              const isActive = pathname === route.path;
              return (
                <li
                  className={`w-full hover:bg-asiatech-darkblue-400 rounded-14 py-2 ${
                    isActive ? "bg-asiatech-darkblue-400" : ""
                  }`}
                  key={route.title}
                >
                  <Link
                    className={`w-full flex items-center font-bold mr-1.5  ${
                      isActive
                        ? "text-asiatech-blue-901 "
                        : "text-asiatech-gray-800"
                    }`}
                    href={route.path}
                  >
                    <span>{route.icon}</span>
                    <span className="mr-8">{route.title}</span>
                  </Link>
                </li>
              );
            } else if (Array.isArray(route.children)) {
              return (
                <li
                  className={`w-full flex flex-col  text-asiatech-gray-800 font-bold cursor-pointer ${
                    route.isOpen ? route.height : "h-10"
                  }  overflow-hidden  transition-all duration-400`}
                  key={index}
                >
                  <div
                    className={`w-full flex flex-row pr-1.5 py-2 hover:bg-asiatech-darkblue-400 rounded-14 ${
                      route.isOpen
                        ? "bg-asiatech-darkblue-400 text-asiatech-blue-901"
                        : ""
                    }`}
                    onClick={() => {
                      setIndexOf({
                        index: index,
                        open: !route.isOpen,
                      });
                    }}
                  >
                    <div>{route.icon}</div>
                    <div className="flex justify-between items-center w-full">
                      <p className="mr-8">{route.title}</p>
                      <p>
                        {route.isOpen ? (
                          <SimpleArrowIcon className="w-4 h-4 rotate-180" />
                        ) : (
                          <SimpleArrowIcon className="w-4 h-4" />
                        )}
                      </p>
                    </div>
                  </div>
                  <ul
                    className={`${route.isOpen ? route.height : "h-0"}  pr-8`}
                  >
                    {route?.children?.map((child: any, index2: number) => {
                      const isActiveChild = pathname === child.path;
                      return (
                        <li key={child.title} className="pt-2">
                          <Link
                            className={`w-full flex items-center  ${
                              isActiveChild
                                ? "text-asiatech-blue-901"
                                : "text-asiatech-gray-800"
                            }`}
                            href={child.path}
                          >
                            <span className="mr-8">{child.title}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            }
          }
        })}
      </ul>
      <button
        onClick={handleLogout}
        className="mt-4 px-4 py-2 w-60 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
      >
        Log Out
      </button>
    </>
  );
}

export default SidebarMenu;
