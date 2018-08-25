<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Use taller_laravel\Frutas;

// Route::get('/misFrutas', function () {
   
//     $frutas_verano = Frutas::where('temporada','verano')->get();
//     // dd($frutas_verano);
//     return view('frutas')->with('frutas_verano', $frutas_verano);

// });

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::match(array('GET', 'POST'), '/holamundo', function()
{
    return '¡Hola mundo!';
});
Route::any('/foo', function()
{
    return '¡Hola mundo!';
});
Route::get('/hola', function()
{
    return view('hola');
});
Route::get('/misFfrutas', 'FrutasController@mostrarFrutas')->name('mostrar-frutas');


