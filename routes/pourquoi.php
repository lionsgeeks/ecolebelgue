<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/pourquoi-choisir-nos-ecoles', function () {
    return Inertia::render('pourquoi/index');
})->name('pourquoi-choisir-nos-ecoles');

