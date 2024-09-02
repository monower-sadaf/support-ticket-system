<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ProjectController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/login', function(){
    return Inertia::render('Login');
});

Route::get('/', function () {
    return Inertia::render('Dashboard');
});


Route::get('/project', [ProjectController::class, 'index'])->name('project.index');
