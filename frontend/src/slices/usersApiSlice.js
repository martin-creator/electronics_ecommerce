import { USERS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: `${USERS_URL}/login`,
                method: "POST",
                body: credentials,
            }),
        keepUnusedDataFor: 5,
    }),
}),
});

export const { useLoginMutation } = usersApiSlice;