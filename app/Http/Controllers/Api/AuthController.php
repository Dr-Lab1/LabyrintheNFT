<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    /** Function de coonexion */
    public function login(LoginRequest $request) 
    {
        //
        $data = $request->validated();

        if(!Auth::attempt($data)) {
            return response(["message" => "Les coordonnées entrées sont incorrectes"], 422);
        }

        /** @var User $user */
        $user = Auth::user();

        $token = $user->createToken('main')->plainTextToken;

        return response(compact('user', 'token'), 200);
    }

    public function signup(SignupRequest $request)
    {
        //
        $data = $request->validated();

        /** @var User $user */
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password'])
        ]);

        $token = $user->createToken('main')->plainTextToken;

        return response(compact('user', 'token'), 200);
    }

    public function logout(Request $request)
    {
        //
        /** @var User $user */
        $user = $request->user();

        $user->currentAccessToken()->delete;

        return response('', 204);
    }
}
