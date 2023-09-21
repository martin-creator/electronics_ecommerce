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
    }),

    register: builder.mutation({
        query: (data) => ({
            url: `${USERS_URL}`,
            method: "POST",
            body: data,
        }),
    }),

    logout: builder.mutation({
        query: () => ({
            url: `${USERS_URL}/logout`,
            method: "GET",
        }),
    }),
    
}),
});

export const { useLoginMutation, useLogoutMutation, useRegisterMutation } = usersApiSlice;