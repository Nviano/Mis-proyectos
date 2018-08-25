@extends('layouts.app')

@section('content') 
<div class ="container">
<a class="btn btn-success" style="float:right" href="{{ route('create') }}" role="button">Nueva fruta</a>


    @include('crud.layout.table')
</div>
<script>
$( document ).ready(function() {
    $('#frutas').DataTable();
})
</script>
@endsection
