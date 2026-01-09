<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix('admissions')->name('admissions.')->group(function () {
    Route::get('/conditions', function () {
        return Inertia::render('admissions/conditions/index');
    })->name('conditions');

    Route::get('/frais', function () {
        return Inertia::render('admissions/frais/index');
    })->name('frais');
});

