<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/maternelle', function () {
    return Inertia::render('scolarite/maternelle/index');
})->name('scolarite.maternelle');

Route::get('/parcours-scolaire-2-18-ans', function () {
    return Inertia::render('scolarite/parcours-scolaire/index');
})->name('scolarite.parcours-scolaire');
