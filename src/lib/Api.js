import networking from "./Networking"
import nopict from "../resources/nopict.jpeg"

const base="http://localhost:8000"

export default {
    
    getImageUrl(url) {
        if (url !== '' && url != null) {
          return `${base}${url}`;
        } else {
          return nopict;
        }
    },

    do_login(data){
        return networking.post(`${base}/account/login`,data);
    },

    get_user_details(){
        return networking.get(`${base}/account/details`);
    },

    get_employee_bazaar(){
        return networking.get(`${base}/api/staffs/bazaars`)
    }
}
