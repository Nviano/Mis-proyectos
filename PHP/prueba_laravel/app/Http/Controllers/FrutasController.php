<?php

namespace taller_laravel\Http\Controllers;

use Illuminate\Http\Request;
Use taller_laravel\Frutas;
class FrutasController extends Controller
{
    public function mostrarFrutas()
    {
        $frutas_verano = Frutas::all();
        return view('frutas')->with('frutas_verano', $frutas_verano);
    }

}
