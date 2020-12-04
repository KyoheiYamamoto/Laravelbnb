<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Bookable;

class BookableController extends Controller
{
    public function index()
    {
        return Bookable::all();
    }

    protected function show($id)
    {
        return Bookable::findOrFail($id);
    }
}
