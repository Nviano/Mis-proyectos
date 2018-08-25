@extends('layouts.app')
@section('content')
<div class='container'>
<h1>Lista de frutas</h1>
@if( $frutas_verano->count() > 10 )
    <h3>Vas a comer demasiada fruta</h3>
@endif

@foreach($frutas_verano as $frutas)
    <p> {{ $frutas->nombre }} - {{$frutas->temporada}}</p>
@endforeach
</div>
@endsection
