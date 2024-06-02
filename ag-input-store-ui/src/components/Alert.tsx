import { FC, useState } from "react";

interface AlertProps {
  title?: string;
  subtitle?: string;
  show: boolean;
}

const Alert: FC<AlertProps> = ({ title, subtitle, show:shows }) => {
  const [show, setShow] = useState(shows);

  const doHide = () => {
    setShow(true);
  };
  if(show){

  return (
    <div
      role="alert"
      className="rounded-xl border border-gray-100 bg-white p-4 absolute top-[80px] shadow-md"
    >
      <div className="flex items-start gap-4">
        <span className="text-green-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>

        <div className="flex-1">
          <strong className="block font-medium text-gray-900"> {title}</strong>

          <p className="mt-1 text-sm text-gray-700">{subtitle}</p>
        </div>

        <button className="text-gray-500 transition hover:text-gray-600">
          <span className="sr-only">Dismiss popup</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6"
            onClick={doHide}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
return <div></div>
};

export default Alert;
