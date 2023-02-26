import FormData from "form-data";
import AuthApi from "../api/AuthApi";
import apiClient from "../api/ClientApi";
import UserApi from "../api/UserApi";

const uploadImage = async (imageURI: String) => {
  var body = new FormData();
  body.append("file", { name: "name", type: "image/jpeg", uri: imageURI });
  try {
    const res = await UserApi.uploadImage(body);
    if (!res.ok) {
      console.log("save failed " + res.problem);
    } else {
      if(res.data){
        const d: any = res.data
        console.log("url: " + d.url)
        return d.url
      }
    }
  } catch (err) {
    console.log("save failed " + err);
  }
  return ""
};

export default {uploadImage}