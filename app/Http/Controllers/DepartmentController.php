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
        return Inertia::render('department/index');
    }

    public function create()
    {
        return Inertia::render('department/create');
    }

    public function store(DepartmentRequest $request)
    {
        $department = new Department();
        $department->name = $request->name;
        $department->save();
        return redirect('/department');
    }

    public function edit($id)
    {
        $department = Department::find($id);
        return Inertia::render('department/edit', [
            'department' => $department
        ]);
    }

    public function update(DepartmentRequest $request, $id)
    {
        $department = Department::find($id);
        $department->name = $request->name;
        $department->save();
        return redirect('/department');
    }


    public function destroy($id)
    {
        $department = Department::find($id);
        $department->delete();
        return redirect('/department');
    }


    public function show($id)
    {
        $department = Department::find($id);
        return Inertia::render('department/show', [
            'department' => $department
        ]);
    }
}
