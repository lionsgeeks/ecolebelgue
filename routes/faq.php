<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/faq', function () {
    return Inertia::render('FAQ/index');
})->name('faq');

