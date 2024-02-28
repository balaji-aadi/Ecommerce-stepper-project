import { toast } from "react-toastify";
import Api from "../api/apiConfig";

export function requestApi(
  method,
  url,
  payload,
  toastMessage,
  navigate,
  handleLoading
) {
  return async function (setData) {
    const navigateTo = ["/", "/stepper", "/notification"];
    try {
      handleLoading(true);
      let res;

      switch (method) {
        case "POST":
          res = await Api.post(url, payload);
          break;
        case "GET":
          res = await Api.get(url, payload);
          break;
        default:
          throw new Error("Unsupported HTTP method");
      }

      // console.log(res.status);
      setData(res.data);

      if (res.status === 200) {
        toast.success(toastMessage, { autoClose: 2000 });
      }

      if (navigate) {
        navigate(navigateTo[0]);
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong ‼🧐", { autoClose: 3000 });
    }
    handleLoading(false);
  };
}
