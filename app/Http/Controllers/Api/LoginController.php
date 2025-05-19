<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    public function login(Request $request){
        $email = $request->email;
        $password = $request->password;

        $user = User::where('email',$email)->first(); // select *from user where user.email = email;

        if(!$user){
            return response()->json([
                'message'=>'Email não encontrado'
            ]);
        }

        if(!Hash::check($password,$user->password)){
            return response()->json([
                'message'=>'Senha do usuário invalida'
            ]);
        }
        
        $token = $user->createToken($user->name)->plainTextToken;

        return response()->json([
            'user'=>$user,
            'token'=>$token,
        ]);
    }

    public function logout (Request $request){
        $email = $request->email;

        $user = User::where('email',$email)->first();

        $user->tokens()->delete();

        return response('',204);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
