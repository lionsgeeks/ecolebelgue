<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/calendrier', function () {
    return Inertia::render('calendrier/index');
})->name('calendrier');
