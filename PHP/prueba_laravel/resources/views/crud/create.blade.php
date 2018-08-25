@extends('layouts.app')
@section('content') 
<div class="container">
{!! Form::open([ 'route' => 'store', 'method' => 'POST']) !!}
<div class="form-group">
    {!! Form::label('nombre', 'Nombre', ['for' => 'nombre'] ) !!}
    {!! Form::text('nombre', null , ['class' => 'form-control', 'id' => 'nombre', 'placeholder' => 'Escribe el nombre de la fruta' ]  ) !!}
</div>
<div class="form-group">
    {!! Form::label('precio', 'Precio', ['for' => 'precio'] ) !!}
    {!! Form::text('precio', null , ['class' => 'form-control', 'id' => 'precio', 'placeholder' => 'Escribe el precio de la fruta' ]  ) !!}
</div>
<div class="form-group">
    {!! Form::label('temporada', 'Temporada', ['for' => 'temporada'] ) !!}
    <select name="temporada" class="form-control">
        <option value="" disabled selected>Elige la temporada</option>
        <option value="Verano">Verano</option>
        <option value="Invierno">Invierno</option>
    </select>
</div>
<div class="form-group">
        {!! Form::submit('Guardar', ['class' => 'btn btn-success btn-block']) !!}
</div>
    {!! Form::close() !!}
    </div>
@endsection

