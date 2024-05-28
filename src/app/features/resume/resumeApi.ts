import { AnyARecord } from "dns";
import { apiSlice } from "../api/apiSlice";

export const resumeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getResumeData: builder.query({
      query: (data: any) => {
        return `${process.env.NEXT_PUBLIC_API_URL}`;
      },
    }),
  }),
});

export const { useGetResumeDataQuery } = resumeApi;
