import { callApi } from ".";
import { methodType } from "../config/methodType";

const playerRequest = (playinRole, battingStyle, bowlingStyle) => {
  var url = "api/signin";
  const data = { email, password };
  return callApi(url, methodType.POST, data);
};




// const getApi = (email, password) => {
//   var url = "api/signin";
//   return callApi(url, methodType.GET);
// };

export { signInRequest };
export { signUpRequest };
