import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type IProps = {
  children: React.ReactNode;
  title: string;
};
export default function PublicLayout({ children, title }: IProps) {
  return (
    <>
      <ToastContainer />
      <div className="top-[50%] flex h-screen w-full items-center justify-center">
        <div className="w-1/2 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="flex flex-wrap items-center">
            <div className="hidden w-full xl:block xl:w-1/2">
              <div className="py-17.5 text-center text-xl font-extrabold">
                <span className="mt-30 inline-block">
                  <Image
                    src={"/images/person.svg"}
                    alt="person"
                    width={176}
                    height={32}
                  />
                </span>
              </div>
            </div>
            <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
              <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
                <h2 className="mb-9 text-lg font-bold text-black sm:text-title-lg">
                  {title}
                </h2>

                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
