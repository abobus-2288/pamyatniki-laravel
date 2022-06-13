<?php

namespace App\GraphQL\Mutations;

use App\Models\User;
use Illuminate\Support\Facades\Hash;

final class Login
{
    /**
     * @param null $_
     * @param array{} $args
     */
    public function __invoke($_, array $args)
    {
        $user = User::query()->where('email', $args['email'])->firstOrFail();

        if ($user !== null && Hash::check($args['password'], $user->password))
        {
            $token = $user->createToken('auth_token')->plainTextToken;

            return [
                'user' => $user,
                'message' => 'Ok',
                'token' => $token
            ];
        }
        if (!$user)
        {
            return [
                'message' => 'No such user'
            ];
        }
        if (! Hash::check($args['password'], $user->password))
        {
            return [
                'message' => 'Incorrect password'
            ];
        }
    }
}
