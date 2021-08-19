import { httpRequest, url } from "./Host";

export const getMahalla = () => {

  var config = {
    url: `${url}`,
    method: "get",
  };
  return httpRequest(config);
}
export const deleteMahalla = (id) => {

  var config = {
    url: `${url}${id}/`,
    method: "delete",
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

export const editMahalla = (config, id) => {
  var configs = {
    url: `${url}${id}/`,
    method: "put",
    data: config,
  };
  return httpRequest(configs);
};
