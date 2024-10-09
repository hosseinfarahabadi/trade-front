import { useUserStore } from "@/store/user";

function Body({ children }: { children: React.ReactNode }) {
  const user = useUserStore((state) => state.user);
  console.log(user);
  return (
    <>
      <main className="w-full h-full">
        {user && (
          <section className="w-full pr-6 mb-8 h-16 bg-asiatech-gray-100 text-xl font-bold text-asiatech-gray-900">
            <span>خوش آمدید </span> <span>{user?.username} </span>
            <span>عزیز </span>
          </section>
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
