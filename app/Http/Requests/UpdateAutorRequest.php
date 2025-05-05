<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateAutorRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'nome'=>'required|string|max:100',
            'cidade'=>'required|string|max:100',
            'endereco'=>'required|string|max:100',
            'bairro'=>'required|string|max:100',
            'cep'=>'required|string|max:20',
            'telefone'=>'required|string|max:100',
            'email'=>'required|string|email|max:100|unique:autors,email',
            'password'=>'required|string|min:',
        ];
    }

    public function messages(){
        return [
            'nome.required'=>'O nome do autor deve ser informado',
            'cidade.required'=>'A cidade deve ser informada',
            'endereco.required'=>'O endereco do autor deve ser informado',
            'bairro.required'=>'O bairro do autor deve ser informado',
            'cep.required'=>'O CEP do autor deve ser informado',
            'telefone.required'=>'O telefone do autor deve ser informado',
            'email.required'=>'O email do autor deve ser informado',
        ];
    }
}
