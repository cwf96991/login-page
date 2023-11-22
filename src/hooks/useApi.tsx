import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useState } from "react";
export const useApi = <T,>(url: string) => {
	const [data, setData] = useState<T | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const fetchData = async (options?: AxiosRequestConfig) => {
		setIsLoading(true);
		try {
			const response: AxiosResponse<T> = await axios(url, options);
			setData(response.data);
		} catch (error) {
			throw new Error(error)
		} finally {
			setIsLoading(false);
		}
	};

	return { data, fetchData, isLoading };
};
