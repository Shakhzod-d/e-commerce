import { Link } from "react-router-dom";
import { LoginData } from "../types";
import { useForm } from "react-hook-form";
import { useState } from "react";

const label = "mb-4 font-bold ml-2";
const input = "border p-4 border-black rounded-2xl w-full mb-1";
const errText = "text-red-500 text-sm";
const inputWrapper = "mb-4 w-full";
export const Register = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  interface Register extends LoginData {
    fullName: string;
  }
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<Register>();

  const submit = async (userData: Register) => {
    try {
      setLoading(true);
      const res = await fetch("https://9303851354d5e8f0.mokky.dev/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (res.ok) {
        setSuccess(true);
      } else {
        setSuccess(false);
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
        {!success ? (
          <>
            <h1 className="font-bold text-2xl text-center">Registration</h1>
            <form
              className="flex flex-col p-4 justify-start items-start"
              onSubmit={handleSubmit(submit)}
            >
              <label htmlFor="email" className={label}>
                fullName
              </label>
              <div className={inputWrapper}>
                <input
                  type="text"
                  placeholder="fullName"
                  id="login"
                  className={input}
                  {...register("fullName", { required: true })}
                />
                {errors?.fullName && (
                  <p className={errText}>inter to fullName</p>
                )}
              </div>
              <label htmlFor="email" className={label}>
                Email
              </label>
              <div className={inputWrapper}>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  id="login"
                  className={input}
                  {...register("email", { required: true })}
                />
                {errors?.email && <p className={errText}>inter to email</p>}
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
                {errors?.password && (
                  <p className={errText}>inter to password</p>
                )}
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
                <Link
                  to={"/login"}
                  className="text-blue-600"
                  aria-disabled={loading}
                >
                  Login
                </Link>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">
              {" "}
              Registration SuccessFully
            </h1>
            <Link to={"/login"} className="text-blue-700 font-semibold">
              Login page
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
