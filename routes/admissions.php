<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix('admissions')->name('admissions.')->group(function () {
    Route::get('/processus', function () {
        return Inertia::render('admissions/processus');
    })->name('processus');

    Route::get('/documents', function () {
        return Inertia::render('admissions/documents');
    })->name('documents');

    Route::get('/frais', function () {
        return Inertia::render('admissions/frais');
    })->name('frais');
});

