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
    }
}
