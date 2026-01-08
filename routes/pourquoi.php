<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix('pourquoi')->name('pourquoi.')->group(function () {
    Route::get('/mission', function () {
        return Inertia::render('pourquoi/mission');
    })->name('mission');

    Route::get('/valeurs', function () {
        return Inertia::render('pourquoi/valeurs');
    })->name('valeurs');

    Route::get('/avantages', function () {
        return Inertia::render('pourquoi/avantages');
    })->name('avantages');
});

