<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
{
    public function index(){
        return Inertia::render('project/index');
    }

    public function create(){
        return Inertia::render('project/create');
    }

    public function store(Request $request){
        dd($request->all());
    }
}
