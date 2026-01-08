<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('home/index', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

