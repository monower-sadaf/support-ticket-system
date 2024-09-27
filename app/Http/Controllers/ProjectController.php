<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Requests\ProjectRequest;
use App\Models\Project;

class ProjectController extends Controller
{
    public function index(){
        $projects = Project::with('project_progress')->get();
        return Inertia::render('project/index', ['projects' => $projects]);
    }

    public function create(){
        return Inertia::render('project/create');
    }

    public function store(ProjectRequest $request){
        $request->validated();
        $result = Project::create($request->all());
        return redirect(route('project.index'));
    }


    public function edit($id){
        $project = Project::with('project_progress')->find($id);
        return Inertia::render('project/edit', ['project' => $project]);
    }

    public function update(ProjectRequest $request, $id){
        $request->validated();
        $project = Project::find($id);
        $project->update($request->all());
        return redirect(route('project.index'));
    }


    public function destroy($id){
        $project = Project::find($id);
        $project->delete();
        return redirect(route('project.index'));
    }

    public function show($id){
        $project = Project::with('project_progress')->find($id);
        return Inertia::render('project/show', ['project' => $project]);
    }
}