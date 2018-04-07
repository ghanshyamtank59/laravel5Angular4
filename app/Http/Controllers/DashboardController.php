<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Response;

class DashboardController extends Controller
{

    private $res;

    public function __construct(ResponseFactory $responseFactory) {
        $this->res = $responseFactory;
    }

    /**
     * @uses Listing
     *
     * @author Ghanshyam Tank
     *
     * @return json
     */
    public function getUserList() {

        $userList = array();
        for ($i=1; $i < 21; $i++) { 
            $userList[] = array(
                'username' => 'User - '.$i,
                'mobile_no' => rand(1111111111, 9999999999)
            );            
        }
        $finalResult = array(
            'success' => true,
            'data' => $userList
        );
        return $finalResult;
    }

}
