<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Requests\DepartmentRequest;
use App\Models\Department;

class DepartmentController extends Controller
{
    public function index()
    {
        $departments = Department::all();
        return Inertia::render('department/index', [
            'departments' => $departments
        ]);
    }

    public function create()
    {
        return Inertia::render('department/create');
    }

    public function store(DepartmentRequest $request)
    {   
        $request->validated();

        $department = new Department();
        $department->name = $request->name;
        $department->save();
        return redirect('/departments');
    }

    public function edit($id)
    {
        $department = Department::find($id);
        return Inertia::render('departments/edit', [
            'department' => $department
        ]);
    }

    public function update(DepartmentRequest $request, $id)
    {
        $department = Department::find($id);
        $department->name = $request->name;
        $department->save();
        return redirect('/departments');
    }


    public function destroy($id)
    {
        $department = Department::find($id);
        $department->delete();
        return redirect('/departments');
    }


    public function show($id)
    {
        $department = Department::find($id);
        return Inertia::render('department/show', [
            'department' => $department
        ]);
    }
}
