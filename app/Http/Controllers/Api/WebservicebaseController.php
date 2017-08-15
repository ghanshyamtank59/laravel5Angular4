<?php
namespace App\Http\Controllers\Api;

use App\User;
use App\Http\Controllers\Controller;

class WebservicebaseController extends Controller
{
    public function __construct($jwtAuth) {
        echo "<pre>";
        print_r("Webservice Base Controller");
        echo "</pre>";
        
    }

    /**
     * @uses Login
     * @author Ghanshyam Tank
     * @return json
     */
    public function postLogin(){
        echo "<pre>";
        print_r("API Login");
        echo "</pre>";
        exit;
        /*$result = $this->WebService->check_validation('login');
        if($result['status']){
            $post = Input::all();
            $data['username'] = $post['username'];
            $data['password'] = $post['password'];
            $data['user_type'] = "WebService";
            $data['status'] = 1;

            if(Auth::once($data)){
                $user_id = Auth::id();
                $user = User::SELECT('id','username','email','first_name','last_name')->find($user_id);
                $finaldata['token'] = $this->jwtAuth->fromUser($user);

                $msg = Lang::get("ws.msg_login_success");
                $result = $this->WebService->prepare_data(true,$msg,$finaldata);
            }else{
                $msg = Lang::get("ws.msg_invalid_credential");
                $result = $this->WebService->prepare_data(false,$msg);
            }
        }
        return $this->WebService->output($result);*/
    }
}