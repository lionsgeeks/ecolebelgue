<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Home routes
require __DIR__.'/home.php';

// Public routes
require __DIR__.'/pourquoi.php';
require __DIR__.'/lexcellence-belge.php';
require __DIR__.'/scolarite.php';
require __DIR__.'/admissions.php';
require __DIR__.'/ecoles.php';
require __DIR__.'/contact.php';
require __DIR__.'/faq.php';

// Authenticated routes
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';

