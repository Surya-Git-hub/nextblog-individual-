import React from "react";

const page = () => {
  return (
    <div>
      <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
        <div className="w-full p-6 border-t-4  rounded-md shadow-md border-top lg:max-w-lg">
          <h1 className="text-3xl font-semibold text-center">
            Login 
          </h1>
          <form className="space-y-4">
            <div>
              <label className="label">
                <span className="text-base label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Email Address"
                className="w-full input input-bordered"
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full input input-bordered"
              />
            </div>
            <a
              href="#"
              className="text-xs  hover:underline hover:text-blue-600"
            >
              Forget Password?
            </a>
            <br/>
            <a
              href="#"
              className="text-xs  hover:underline hover:text-blue-600"
            >
              New User Register Instead?
            </a>
            <div>
              <button className="btn btn-block">Login</button>
            </div>
            <div className="flex justify-around ">
            <button className="btn  glass ">Login with Google</button>
            <button className="btn  glass">Login with Github</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
