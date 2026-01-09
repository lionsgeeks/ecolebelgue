<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

    Route::get('/pourquoi', function () {
        return Inertia::render('pourquoi/index');
    })->name('pourquoi');

