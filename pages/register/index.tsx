import React from "react";
import LogoSVG from "@/components/Login/common/LogoSVG";
import RegistrationCard from "@/components/Login/common/RegistrationCard";
import {
  RegistraionSVG1,
  RegistraionSVG2,
  RegistraionSVG3,
  RegistraionSVG4,
  RegistraionSVG5,
} from "@/components/Login/images/RegistraionSVG";
import { useRouter } from "next/router";
import LeftImg from "@/components/Login/common/LeftImg";
import RightImg from "@/components/Login/common/RightImg";

const RegisterationTypesData = [
  {
    url: "mau",
    type: "pm",
    title: "PropVIVO User Login",
    message: "Only for Propvivo staff members.",
    svg: <RegistraionSVG1 />,
  },
  {
    title: "Self Manged",
    message: "Empowering associations for independent management.",
    svg: <RegistraionSVG3 />,
  },
  {
    url: "mau",
    title: "Association User",
    message:
      "New additions managed by Propvivo, including homeowners and committee members.",
    svg: <RegistraionSVG5 />,
  },
  {
    title: "Vendor Portal",
    message: "Welcoming new vendors interested in collaborating with Propvivo.",
    svg: <RegistraionSVG4 />,
  },
  {
    title: "Freelanced Property Manager",
    message: "Offering freelancers a path for career growth with Propvivo.",
    svg: <RegistraionSVG2 />,
  },
];
const RegisterationTypes = () => {
  const router = useRouter();

  const handleNavigate = (url, type) => {
    if (type !== undefined) {
      router.push(
        `${process.env.NEXT_PUBLIC_APP_REGISTRTION}/${url}?userType=${type}`
      );
    } else {
      router.push(`${process.env.NEXT_PUBLIC_APP_REGISTRTION}/${url}`);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-full md:w-1/2 bg-orange-100 flex items-center justify-center relative">
        <div className="hidden md:inline-block"><LeftImg /></div>
        <div className="absolute top-4 left-4 text-lg font-bold text-orange-400">Your Logo</div>
      </div>
      <div className="absolute z-10 inset-0 flex items-center justify-center p-4 md:p-0">
        <div className="max-w-md w-full p-6 md:p-8 rounded-3xl shadow-wrapShadow bg-white">
          <div className="flex">
            <div className="w-8/12">
              <h2 className="text-base md:text-[20px] text-black mt-1">Welcome to Lorem</h2>
              <h1 className="text-[40px] md:text-[55px] font-medium text-black">Sign up</h1>
            </div>
            <div className="w-1/3">
              <span className="text-sm text-[#8D8D8D] hover:text-gray-800">Have an Account? </span>
              <a href="#" className="text-[#E48700] text-sm">Sign in</a>
            </div>
            
          </div>
          <form className="mt-8">
            <div className="flex flex-col-reverse md:flex-col">
              <div className="flex flex-col mt-7 md:mt-0">
                <div className="mb-6">
                  <label htmlFor="username" className="block text-sm md:text-base">
                    Enter your username or email address
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm placeholder:text-[#808080] h-14"
                    placeholder="Username or email address"
                  />
                </div>
                <div className="mb-6 flex gap-4">
                  <div>
                    <label htmlFor="username" className="block text-sm md:text-base">
                      User name
                    </label>
                    <input
                      type="text"
                      id="username"
                      className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm placeholder:text-[#808080] h-14"
                      placeholder="Username"
                    />
                  </div>
                  <div>
                    <label htmlFor="username" className="block text-sm md:text-base">
                      Contact Number
                    </label>
                    <input
                      type="text"
                      id="username"
                      className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm placeholder:text-[#808080] h-14"
                      placeholder="Contact Number"
                    />
                  </div>
                </div>
                <div className="mb-6 relative">
                  <label htmlFor="password" className="block text-sm md:text-base">
                    Enter your Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm placeholder:text-[#808080] h-14"
                    placeholder="Password"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-[#E48700] hover:bg-[#e5921d] text-white font-semibold rounded-md shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e5921d]"
                  >
                    Sign in
                  </button>
                </div>
              </div>
            </div>

          </form>
        </div>
      </div>
      <div className="w-1/2 bg-white hidden md:flex items-center justify-center relative">
        <RightImg />
      </div>
      </div>
  );
};

export default RegisterationTypes;
