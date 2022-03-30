import axios from "axios";
import Config from "./config";
import {reactLocalStorage} from 'reactjs-localstorage';

class AuthHandler{
    static login(username, password,callback){
        axios.post(Config.loginUrl, {username:username, password:password})
        .then((response)=>{
            if(response.status === 200){
                // console.log(response.data);
                reactLocalStorage.set('token', response.data.access);
                reactLocalStorage.set('refresh', response.data.refresh);
                callback({"error": false, "message":"Login successfull"});
            }
        })
        .catch((error)=>{
            if (error.response) {
                // Request made and server responded
                callback({"error": true, "message":"Error during login, invalid login Details"});
              } else if (error.request) {
                // The request was made but no response was received
                console.log(error.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
              }
        })
    }
    static loggedIn(){
      if(reactLocalStorage.get("token") && reactLocalStorage.get("refresh")){
          return true;
      }else{
        return false;
      }
    };

    static getLoginToken(){
      return reactLocalStorage.get("token");
    };
    static getRefreshToken(){
      return reactLocalStorage.get("refresh");
    };

    static logoutUser(){
      reactLocalStorage.remove("token");
      reactLocalStorage.remove("refresh");
    }

    static checkTokenExpiry(){
      var expire = false;
      var token=this.getLoginToken();
      var tokenArray=token.split(".");
      var jwt=JSON.parse(atob(tokenArray[1]))
      if (jwt && jwt.exp && Number.isFinite(jwt.exp)){
        expire=jwt.exp*1000;
      } else{
        expire=false;
      }
      return(Date.now() > expire);
    }
}

export default AuthHandler;