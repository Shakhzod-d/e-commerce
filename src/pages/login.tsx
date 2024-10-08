import { Link, useNavigate } from "react-router-dom";
import { LoginData } from "../types";
import { useForm } from "react-hook-form";

import { useState } from "react";
const label = "mb-4 font-bold ml-2";
const input = "border p-4 border-black rounded-2xl w-full mb-1";
const errText = "text-red-500 text-sm";
const inputWrapper = "mb-4 w-full";

export const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<LoginData>();

  const submit = async (userData: LoginData) => {
    try {
      setLoading(true);
      const res = await fetch("https://da5d82458f584cf7.mokky.dev/auth", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (res.ok) {
        navigate("/");
      } else {
        alert("user Not Found");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full h-screen flex justify-center items-center bg-slate-200 border">
      <div className="w-[500px]  border p-4 rounded-lg bg-white">
        <h1 className="font-bold text-2xl text-center">Login</h1>
        <form
          className="flex flex-col p-4 justify-start items-start"
          onSubmit={handleSubmit(submit)}
        >
          <label htmlFor="email" className={label}>
            Login
          </label>
          <div className={inputWrapper}>
            <input
              type="email"
              placeholder="example@gmail.com"
              id="login"
              className={input}
              {...register("email", { required: true })}
            />
            {errors?.email && <p className={errText}>inter to Login</p>}
          </div>
          <label htmlFor="password" className={label}>
            password
          </label>
          <div className={inputWrapper}>
            <input
              type="password"
              placeholder="password"
              id="password"
              className={input}
              {...register("password", { required: true })}
            />
            {errors?.password && <p className={errText}>inter to password</p>}
          </div>
          <button
            className={`p-4 bg-blue-500 w-full rounded-2xl active:scale-95 mb-4 text-white font-semibold  ${
              loading && "opacity-35"
            }`}
            disabled={loading}
          >
            Submit
          </button>
          <div className="flex  justify-end  w-full">
            <Link to={"/register"} className="text-blue-600">
              Registration
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
