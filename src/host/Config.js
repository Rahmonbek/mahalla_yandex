import { gridColumnsTotalWidthSelector } from "@material-ui/data-grid";
import { httpRequest, url } from "./Host";

export const getMahalla = () => {
  console.log('ssdssds')
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
