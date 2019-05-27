import axios from 'axios';

export const Interceptor = ()=>{
    axios.interceptors.response.use((res)=> {
        return res;
    }, (err)=> {
        //catches if the session ended!
        console.log(err)
        if(window.location.href.indexOf("login")<1)
            window.location.href="/login";
        return Promise.reject(err);
    });

}
const networking = {
    get(url){
        return new Promise((success, error)=>{
            axios({
                method:'get',
                url:url,
                headers:{
                    'Authorization':`Bearer ${localStorage.token}`,
                    'Content-Type':'Application/json'
                }
            }).then((res)=>success(res.data),(err)=>error(err))
        });
    },
    put(url,data){
        return new Promise((success, error)=>{
            axios({
                method:'put',
                url:url,
                headers:{
                    'Authorization':`Bearer ${localStorage.token}`,
                    'Content-Type':'Application/json'
                },
                data:JSON.stringify(data)
            }).then((res)=>success(res.data),(err)=>error(err))
        });
    },
    patch(url,data){
        return new Promise((success, error)=>{
            axios({
                method:'patch',
                url:url,
                headers:{
                    'Authorization':`Bearer ${localStorage.token}`,
                    'Content-Type':'Application/json'
                },
                data:JSON.stringify(data)
            }).then((res)=>success(res.data),(err)=>error(err))
        });
    },
    post(url,data){
        return new Promise((success, error)=>{
            axios({
                method:'post',
                url:url,
                headers:{
                    'Authorization':`Bearer ${localStorage.token}`,
                    'Content-Type':'Application/json'
                },
                data:JSON.stringify(data)
            }).then((res)=>success(res.data),(err)=>error(err))
        });
    },
    delete(url){
        return new Promise((success, error)=>{
            axios({
                method:'delete',
                url:url,
                headers:{
                    'Authorization':`Bearer ${localStorage.token}`,
                    'Content-Type':'Application/json'
                },
            }).then((res)=>success(res.data),(err)=>error(err))
        });
    }
}

export default networking;
