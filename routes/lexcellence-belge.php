<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

    Route::get('/lexcellence-belge', function () {
        return Inertia::render('lexcellence-belge/index');
    })->name('lexcellence-belge');

