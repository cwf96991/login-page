import { Button } from "@material-tailwind/react";
import InputField from "../InputField";
import React, { useState } from "react";
import { useApi } from "../../hooks/useApi";

const LoginForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isValidEmail, setIsValidEmail] = useState(false);
	const { data, fetchData, isLoading } = useApi(
		"https://hostname/v1/auth/login"
	);
	const isValid = isValidEmail && !isLoading && password.length > 0;
	async function loginHandler() {
		if (isValid) {
			const params = {
				email,
				password,
			};
			try {
				await fetchData({
					method: "POST",
					params,
				});
				if (data) {
					alert("data :" + data);
				}
			} catch (error) {
				alert(error);
			}

		}
	}
	return (
		<div className="flex flex-col w-full md:w-[576px] items-center justify-center">
			<div className="font-bold text-[32px] text-[#006B54] font-nunito ">
				studio global
			</div>
			<div className="text-[32px] mb-2">Sign in to your account</div>
			<form className="w-[440px]" noValidate>
				<InputField
					value={email}
					type="email"
					placeholder="Email Address*"
					className=" mb-8"
					onChange={(e) => {
						setIsValidEmail(e.target.validity.valid);
						setEmail(e.target.value);
					}}
				/>
				<InputField
					value={password}
					placeholder="Password*"
					type="password"
					onChange={(e) => {
						setPassword(e.target.value);
					}}
				/>
				<div className="flex justify-end w-full my-4">
					<a className="text-[12px] text-[#006B54] cursor-pointer hover:underline">
						Forgot password?
					</a>
				</div>
				<Button
					onClick={() => {
						loginHandler();
					}}
					disabled={!isValid}
					className=" w-full rounded-full h-[40px] bg-[#006B54] normal-case font-normal mb-4"
				>
					{isLoading ? "Loading" : "Sign in"}
				</Button>
				<div className="text-center text-[12px] ">
					Don’t have an account yet?
					<a className="text-[#006B54] cursor-pointer hover:underline ml-1">
						Get started here
					</a>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;
