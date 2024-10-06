import redaxios, { Options, Response } from "redaxios";
export type TResponse<T> = Response<T>;
export type OptionsType = Options;

let access = typeof window !== "undefined" ? window.localStorage.getItem("token") : "";
const getToken = () => typeof window !== "undefined" ? window.localStorage.getItem("token") : "";

console.log(getToken())
const defaultOpTion = {
  headers: {
     authorization: `Bearer ${access ? access : ""} `,
  },
};

const get = async (link: string, Option?: Options | undefined): Promise<Response<any>> => {
   access = typeof window !== "undefined" ? window.localStorage.getItem("token") : "";
  const defaultOpTion = {
    headers: {
       authorization: `Bearer ${access ? access : ""} `,
    },
  };
  return redaxios.get(link, { ...Option, headers:{...defaultOpTion.headers} });
};

const post = async (
  link: string,
  body: any,
  Option?: Options | undefined
): Promise<Response<any>> => {
  return redaxios.post(link, body, {
    ...Option,
    headers: { ...defaultOpTion.headers, ...Option?.headers },
  });
};

const patch = async (
  link: string,
  body: any,
  Option?: Options | undefined
): Promise<Response<any>> => {
  access = typeof window !== "undefined" ? window.localStorage.getItem("token") : "";
  const defaultOpTion = {
    headers: {
       authorization: `Bearer ${access ? access : ""} `,
    },
  };
  return redaxios.patch(link, body, {
    ...Option,
    headers: { ...defaultOpTion.headers, ...Option?.headers },
  });
};

const put = async (
  link: string,
  body: any,
  Option?: Options | undefined
): Promise<Response<any>> => {
  access = typeof window !== "undefined" ? window.localStorage.getItem("token") : "";
  const defaultOpTion = {
    headers: {
       authorization: `Bearer ${access ? access : ""} `,
    },
  };
  return redaxios.put(link, body, {
    ...Option,
    headers: { ...defaultOpTion.headers, ...Option?.headers },
  });
};

const deleteMethod = async (link: string, Option?: Options | undefined): Promise<Response<any>> => {
  access = typeof window !== "undefined" ? window.localStorage.getItem("token") : "";
  const defaultOpTion = {
    headers: {
       authorization: `Bearer ${access ? access : ""} `,
    },
  };
  return redaxios.delete(link, {
    ...Option,
    headers: { ...defaultOpTion.headers, ...Option?.headers },
  });
};

const setToken = (token: string) => {
  // defaultOpTion.headers.authorization = "Bearer " + token;
};

const FetchApi = {
  get,
  post,
  patch,
  put,
  delete: deleteMethod,
  setToken,
};
export default FetchApi;
