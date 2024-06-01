"use client";

import BugleIcon from "@/assets/icons/BugleIcon";
import CalendarIcon from "@/assets/icons/CalendarIcon";
import CdnIcon from "@/assets/icons/CdnIcon";
import CircleGearInfoIcon from "@/assets/icons/CircleGearInfoIcon";
import CurlyPercentIcon from "@/assets/icons/CurlyPercentIcon";
import CustomerContact from "@/assets/icons/CustomerContact";
import Datacentericon from "@/assets/icons/DatacenterIcon";
import DocsIcon from "@/assets/icons/DocsIcon";
import GlobalandServerIcon from "@/assets/icons/GlobalandServerIcon";
import LogoutIcon from "@/assets/icons/LogoutIcon";
import MakeNoteIcon from "@/assets/icons/MakeNoteIcon";
import MarketplaceIcon from "@/assets/icons/MarketplaceIcon";
import MonitorChartIcon from "@/assets/icons/MonitorChartIcon";
import SimpleArrowIcon from "@/assets/icons/SimpleArrowIcon";
import TodoListIcon from "@/assets/icons/TodoListIcon";
import CardsIcon from "@/assets/icons/cardsIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { ISidebarMenu, TRoutes } from "../interface/interfaces";

function SidebarMenu({ mouseHover, open }: ISidebarMenu) {
  const pathname = usePathname();
  const id = typeof window !== "undefined" ? window.localStorage.getItem("id") : "";
  const [indexOf, setIndexOf] = useState<{ index: number; open: boolean }>({
    index: -1,
    open: false,
  });
  const users: any = {
    "1132": [
      "dashboard",
      "dashboardcdn",
      "dashboarddns",
      "datacenter",
      "ipManagement",
      "switchManagement",
      "confilict",
      "notification",
      "marketplace",
      "rate",
      "errorManagement",
      "dashboardfinance",
      "contactCustomer",
      "campaignManagement",
      "promotion",
      "documention",
      "logout",
      "reports",
      "dashboardObject",
    ], // ahmadpanah
    "26813": [
      "dashboard",
      "dashboardcdn",
      "dashboarddns",
      "datacenter",
      "confilict",
      "notification",
      "marketplace",
      "rate",
      "errorManagement",
      "dashboardfinance",
      "contactCustomer",
      "campaignManagement",
      "promotion",
      "documention",
      "logout",
    ], // sohrabi
    "39758": [
      "dashboard",
      "dashboardcdn",
      "dashboarddns",
      "datacenter",
      "confilict",
      "notification",
      "marketplace",
      "rate",
      "errorManagement",
      "dashboardfinance",
      "contactCustomer",
      "campaignManagement",
      "promotion",
      "documention",
      "logout",
    ], // sohrabi
    "4004": ["dashboard", "dashboardfinance", "logout"], // abolhasani
    "51691": ["dashboard", "dashboardfinance", "logout"], // neishabouri
    "21976": ["dashboarddns", "logout"], // faghihi
    "63908": ["dashboarddns", "logout"], // tajik
    "49433": ["dashboarddns", "logout"], // royanian
    "73241": ["dashboard", "notification", "logout"], // masror
    "56376": [
      "dashboard",
      "notification",
      "logout",
      "campaignManagement",
      "promotion",
      "datacenter",
    ], // ghari
    "73624": ["dashboard", "notification", "logout"], // adibiyan
    "63965": ["dashboardcdn", "logout"], // ghasemian
    "71885": ["dashboardcdn", "logout"], // ramezan
  };
  const routes = useMemo(() => {
    let tempRoute: TRoutes[] = [
      {
        isShow: true,
        name: "dashboard",
        path: "/panel/dashboard",
        title: "کلود در یک نگاه",
        icon: <MonitorChartIcon className="w-6 h-6" />,
      },
      {
        isShow: true,
        name: "dashboardfinance",
        path: "/panel/financeDashboard",
        title: "داشبورد مالی",
        icon: <CardsIcon className="w-6 h-6" />,
      },
      {
        isShow: true,
        name: "dashboardcdn",
        path: "/panel/cdn",
        title: "داشبورد CDN",
        icon: <CdnIcon className="w-6 h-6" />,
      },
      {
        isShow: true,
        name: "dashboarddns",
        path: "/panel/domainManagement",
        title: "داشبورد DNS",
        icon: <GlobalandServerIcon className="w-6 h-6" />,
      },
      // {
      //   isShow: true,
      //   name: "ipManagement",
      //   path: "/panel/ipManagement",
      //   title: "مدیریت آی‌پی",
      //   icon: <LogoutIcon className="w-6 h-6" />,
      // },
      // {
      //   isShow: true,
      //   name: "switchManagement",
      //   path: "/panel/switchManagement",
      //   title: "مدیریت سوئیچ",
      //   icon: <LogoutIcon className="w-6 h-6" />,
      // },
      {
        isShow: true,
        name: "dashboardObject",
        path: "/panel/objectStorage/dashboard",
        title: "داشبورد Object",
        icon: <GlobalandServerIcon className="w-6 h-6" />,
      },
      {
        path: 1,
        title: "دیتاسنتر ابری",
        icon: <Datacentericon className="w-6 h-6" />,
        height: "h-[100px]",
        isOpen: false,
        isShow: true,
        name: "datacenter",
        children: [
          {
            path: "/panel/removedServers",
            title: "ماشین های حذف شده",
          },
        ],
      },
      // {
      //   isShow: true,
      //   name: "dashboarddns",
      //   path: "/panel/machin",
      //   title: "گزارش ماشین ها",
      //   icon: <GlobalandServerIcon className="w-6 h-6" />,
      // },
      {
        path: 1,
        title: "گزارشات",
        icon: <Datacentericon className="w-6 h-6" />,
        height: "h-max",
        isOpen: false,
        isShow: true,
        name: "reports",
        children: [
          {
            path: "/panel/reports/all/invoices",
            title: "فاکتورها",
          },
          {
            path: "/panel/reports/all/payments",
            title: "پرداخت ها",
          },
          {
            path: "/panel/reports/wallet",
            title: "کیف پول",
          },
          {
            path: "/panel/reports/newandrenewalusers",
            title: "مشترکین جدید و تمدیدی",
          },
          {
            path: "/panel/reports/packageSales",
            title: "گزارش فروش پکیج ها",
          },
          {
            path: "/panel/reports/highestAmountOfWalletRecharge",
            title: "بیشترین مقدار شارژ کیف پول ",
          },
          {
            path: "/panel/reports/mostDeleteVm",
            title: "بیشترین تعداد حذف ماشین",
          },
          {
            path: "/panel/reports/highestAmountOfSeverCreation",
            title: "بیشترین تعداد ساخت ماشین",
          },
          {
            path: "/panel/reports/newUserMachines",
            title: "تعداد ماشین‌های کاربران جدید",
          },
          {
            path: "/panel/reports/mostRegisteredTicket",
            title: "بیشترین تعداد تیکت ثبت شده",
          },
        ],
      },
      {
        path: 1,
        title: "اطلاع رسانی",
        icon: <BugleIcon className="w-6 h-6" />,
        height: "h-[120px]",
        isOpen: false,
        children: [
          {
            path: "/panel/news/list",
            title: "تازه ها",
          },
          {
            path: "/panel/promotions/list",
            title: "پروموشن محصول ",
          },
        ],
        isShow: true,
        name: "notification",
      },
      {
        path: 1,
        title: "بازارچه",
        icon: <MarketplaceIcon className="w-6 h-6" />,
        height: "h-[120px]",
        isOpen: false,
        children: [
          {
            path: "/panel/marketplace/category/list",
            title: "دسته بندی ها",
          },
          {
            path: "/panel/marketplace/owner/list",
            title: "صاحب محصول",
          },
          {
            path: "/panel/marketplace/settings/banner/list",
            title: "بنر",
          },
        ],
        isShow: true,
        name: "marketplace",
      },
      {
        isShow: true,
        name: "campaignManagement",
        path: "/panel/campaign/list",
        title: "مدیریت کمپین",
        icon: <CalendarIcon className="w-6 h-6" />,
      },
      {
        path: 1,
        title: "پروموشن",
        icon: <CurlyPercentIcon className="w-6 h-6" />,
        height: "h-[80px]",
        isOpen: false,
        isShow: true,
        name: "promotion",
        children: [
          {
            path: "/panel/promotion/package/list",
            title: "بسته های ترافیکی",
          },
        ],
      },
      {
        path: 1,
        title: "مغایرت یابی",
        icon: <MakeNoteIcon className="w-6 h-6" />,
        height: "h-[120px]",
        isOpen: false,
        isShow: true,
        name: "confilict",
        children: [
          {
            path: "/panel/billingReport",
            title: "گزارشات Billing",
          },
          {
            path: "/panel/walletReport",
            title: "گزارشات Wallet",
          },
        ],
      },
      {
        path: 1,
        title: "مستندات",
        icon: <DocsIcon className="w-6 h-6" />,
        height: "h-[120px]",
        isOpen: false,
        isShow: true,
        name: "documention",
        children: [
          {
            path: "/panel/docs/category",
            title: "دسته بندی ها",
          },
          {
            path: "/panel/docs/content",
            title: "محتوا",
          },
        ],
      },
      {
        isShow: true,
        path: "/panel/rate",
        name: "rate",
        title: "نظرسنجی",
        icon: <TodoListIcon className="w-6 h-6" />,
      },
      {
        isShow: true,
        path: "/panel/errorManagement",
        name: "errorManagement",
        title: "مدیریت خطاها",
        icon: <CircleGearInfoIcon className="w-6 h-6" />,
      },
      {
        path: 1,
        title: "ارتباط با مشتریان",
        icon: <CustomerContact className="w-6 h-6" />,
        height: "h-[155px]",
        isOpen: false,
        isShow: true,
        name: "contactCustomer",
        children: [
          {
            path: "/panel/InvoicesAboutToExpire",
            title: "فاکتورهای در شرف حذف",
          },
          {
            path: "/panel/machinsAboutToBeRemove",
            title: "ماشین های در شرف حذف",
          },
        ],
      },
      {
        isShow: true,
        name: "logout",
        path: "/logout",
        title: "خروج",
        icon: <LogoutIcon className="w-6 h-6" />,
      },
    ];
    tempRoute = tempRoute.map((route, index) => {
      if (id && users[id] && users[id]?.filter((user: any) => user === route.name)[0]) {
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
      }
      // else if (condition) {
      // }
      else {
        route.isShow = false;
      }

      return route;
    });

    return [...tempRoute];
  }, [open, mouseHover, pathname, indexOf, id, users]);
  // const [routes, setRoutes] = useState<TRoutes[]>([
  //   {
  //     path: "/panel/dashboard",
  //     title: "کلود در یک نگاه",
  //     icon: <MonitorChartIcon className="w-6 h-6" />,
  //   },
  //   {
  //     path: "/panel/cdn",
  //     title: "داشبورد cdn",
  //     icon: <CdnIcon className="w-6 h-6" />,
  //   },

  //   {
  //     path: "/panel/domainManagement",
  //     title: "داشبورد DNS",
  //     icon: <GlobalandServerIcon className="w-6 h-6" />,
  //   },
  //   {
  //     path: 1,
  //     title: "دیتاسنتر ابری",
  //     icon: <Datacentericon className="w-6 h-6" />,
  //     height: "h-[100px]",
  //     isOpen: false,
  //     children: [
  //       {
  //         path: "/panel/removedServers",
  //         title: "ماشین های حذف شده",
  //       },
  //     ],
  //   },
  //   {
  //     path: 1,
  //     title: "اطلاع رسانی",
  //     icon: <BugleIcon className="w-6 h-6" />,
  //     height: "h-[120px]",
  //     isOpen: false,
  //     children: [
  //       {
  //         path: "/panel/news/list",
  //         title: "تازه ها",
  //       },
  //       {
  //         path: "/panel/promotions/list",
  //         title: "پروموشن محصول ",
  //       },
  //     ],
  //   },
  //   {
  //     path: 1,
  //     title: "بازارچه",
  //     icon: <MarketplaceIcon className="w-6 h-6" />,
  //     height: "h-[120px]",
  //     isOpen: false,
  //     children: [
  //       {
  //         path: "/panel/marketplace/category/list",
  //         title: "دسته بندی ها",
  //       },
  //       {
  //         path: "/panel/marketplace/owner/list",
  //         title: "صاحب محصول",
  //       },
  //       {
  //         path: "/panel/marketplace/settings/banner/list",
  //         title: "بنر",
  //       },
  //     ],
  //   },

  //   // {
  //   //   path: "rate",
  //   //   title: "نظرسنجی",
  //   //   icon: <NavIcon className="w-6 h-6" />,
  //   // },
  //   {
  //     path: "/logout",
  //     title: "خروج",
  //     icon: <LogoutIcon className="w-6 h-6" />,
  //   },
  // ]);

  // // useEffect(() => {
  // //
  // // }, [routes]);

  // useEffect(() => {
  //   let tempRoute = routes.map((route, index) => {
  //     if (route.path === 1) {
  //       route.children.map((child, index2) => {
  //         if (child.path === pathname) {
  //           route.isOpen = true;
  //         } else {
  //           route.isOpen = false;
  //         }
  //         return child;
  //       });
  //     }
  //     return route;
  //   });
  //   setRoutes([...tempRoute]);
  // }, [pathname]);
  // useEffect(() => {
  //   let tempRoute = routes.map((route, index) => {
  //     if (route.path === 1) {
  //       route.children.map((child, index2) => {
  //         if ((open || mouseHover) && pathname === child.path) {
  //           route.isOpen = true;
  //         } else {
  //           route.isOpen = false;
  //         }
  //         return child;
  //       });
  //     }
  //     return route;
  //   });
  //   setRoutes([...tempRoute]);
  // }, [open, mouseHover, pathname]);

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
                  key={index}
                >
                  <Link
                    className={`w-full flex items-center font-bold mr-1.5  ${
                      isActive ? "text-asiatech-blue-901 " : "text-asiatech-gray-800"
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
                      route.isOpen ? "bg-asiatech-darkblue-400 text-asiatech-blue-901" : ""
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
                  <ul className={`${route.isOpen ? route.height : "h-0"}  pr-8`}>
                    {route?.children?.map((child: any, index2: number) => {
                      const isActiveChild = pathname === child.path;
                      return (
                        <li key={index2} className="pt-2">
                          <Link
                            className={`w-full flex items-center  ${
                              isActiveChild ? "text-asiatech-blue-901" : "text-asiatech-gray-800"
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
    </>
  );
}

export default SidebarMenu;
