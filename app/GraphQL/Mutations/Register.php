<?php

namespace App\GraphQL\Mutations;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

final class Register
{
    /**
     * @param null $_
     * @param array{} $args
     */
    public function __invoke($_, array $args)
    {
        if (User::query()->where('email', '=', $args['email']) == null) {
            $user = User::create([
                'name' => $args['name'],
                'password' => Hash::make($args['password']),
                'email' => $args['email']
            ]);

            $token = $user->createToken('auth_token')->plainTextToken;

            return [
                'user' => $user,
                'token' => $token,
                'message' => 'Ok'
            ];
        } else {
            return [
                'message' => 'Email is already taken'
            ];
        }
    }
}
