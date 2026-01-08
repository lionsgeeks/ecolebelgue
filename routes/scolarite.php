<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix('scolarite')->name('scolarite.')->group(function () {
    Route::get('/programmes', function () {
        return Inertia::render('scolarite/programmes');
    })->name('programmes');

    Route::get('/calendrier', function () {
        return Inertia::render('scolarite/calendrier');
    })->name('calendrier');

    Route::get('/examens', function () {
        return Inertia::render('scolarite/examens');
    })->name('examens');
});

