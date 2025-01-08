import { useUserStore } from "@/store/user";
import { Button, Card } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { CiLogout } from "react-icons/ci";
import useBody from "../hooks/useBody";

function Body({ children }: { children: React.ReactNode }) {
  const {} = useBody();
  const user = useUserStore((state) => state.user);
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };
  console.log(user);
  return (
    <>
      <main className="w-full  h-full">
        {user && (
          <div className="px-6 mb-20">
            <Card className="px-4 py-2 overflow-visible">
              <div className="w-full flex justify-between items-center pr-6    text-lg font-bold text-asiatech-gray-900">
                <div>
                  <span>پنل مدریت سرمایه و ترید </span>
                </div>
                <div className="flex gap-4 items-center">
                  <span>{user?.username} </span>
                  <Button
                    variant="bordered"
                    color="danger"
                    onClick={handleLogout}
                    className="flex items-center   px-4 py-2    rounded-2xl  transition duration-300"
                  >
                    <CiLogout className="ml-2 text-xl" />
                    خروج
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}
        <section className="w-full h-full px-6 -mt-12">{children}</section>
      </main>
    </>
  );
}

export default Body;

// {
//   <div className="w-full mt-12 px-5">
//         <div className="w-full bg-white px-4 py-6 rounded-14 flex-col items-start">
//           <div className="w-full mb-4 flex text-asiatech-gray-800">
//             <span className="mr-2 font-bold text-base">پین شده ها</span>
//             <AttachIcon className="w-6 h-6" />
//           </div>
//           <div className="w-full flex justify-between">
//             <div>
//               <div className="bg-asiatech-gray-300 text-asiatech-gray-900 p-3 rounded-lg flex items-center max-w-max">
//                 <span className="mr-2 text-sm">فروش</span>
//                 <CircleCrossIcon className="w-6 h-6" />
//               </div>
//             </div>
//             <Button>
//               <span>افزودن</span>
//               <PlusIcon className="w-6 h-6" />
//             </Button>
//           </div>
//         </div>
//       </div>
//       <div className="w-full h-20 bg-transparent"></div>
// }
