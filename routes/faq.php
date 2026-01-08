<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/faq', function () {
    return Inertia::render('faq/index');
})->name('faq');

