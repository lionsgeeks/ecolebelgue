<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix('ecoles')->name('ecoles.')->group(function () {
    Route::get('/localisation', function () {
        return Inertia::render('ecoles/localisation');
    })->name('localisation');

    Route::get('/infrastructures', function () {
        return Inertia::render('ecoles/infrastructures');
    })->name('infrastructures');

    Route::get('/equipe', function () {
        return Inertia::render('ecoles/equipe');
    })->name('equipe');
});

