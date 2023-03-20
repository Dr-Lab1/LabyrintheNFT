<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class SignupRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            //
            'email' => ['email', 'required', 'unique:users,email'],
            'name' => ['required', 'string'],
            'password' => [
                'required',
                Password::min(8) 
                    ->symbols()
                    ->letters()
            ]
        ];
    }
}
