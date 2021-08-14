import { httpRequest, url } from "./Host";

export const getMahalla = () => {
  var config = {
    url: `${url}`,
    method: "get",
  };
  return httpRequest(config);
};

export const createMahalla = (config) => {
  var configs = {
    url: `${url}`,
    method: "post",
    data: config,
  };
  return httpRequest(configs);
};
