<?php

namespace App\GraphQL\Mutations;

use Illuminate\Support\Facades\Auth;

final class Logout
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __invoke($_, array $args)
    {


        if (Auth::user()->currentAccessToken()->delete())
        {
            return [
                'message' => 'Successfully logged out'
            ];
        } else {
            return [
                'message' => 'Something went wrong'
            ];
        }
    }
}
