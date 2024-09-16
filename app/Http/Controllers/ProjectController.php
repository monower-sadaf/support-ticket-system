<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\ProjectRequest;

class ProjectController extends Controller
{
    public function index(){
        return Inertia::render('project/index');
    }

    public function create(){
        return Inertia::render('project/create');
    }

    public function store(ProjectRequest $request){

        $request->validated();

        dd($request->all());

        

        /* $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:255'],
        ]);

        if ($validator->fails()) {
            return redirect(route('project.create'))
                        ->withErrors($validator)
                        ->withInput();
        } */
    }
}
