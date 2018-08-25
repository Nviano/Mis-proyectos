<h1 class="text-primary">Control de Frutas</h1>
<table class="table table-bordered" id="frutas">
  <thead>
    <tr>
        <th class="text-center">Nombre</th>
        <th class="text-center">Temporada</th>
        <th class="text-center">Precio</th>
        <th class="text-center">Fecha</th>
    </tr>
  </thead>
  <tbody>
    @foreach($frutas as $fruta)
        <tr>
            <td class="text-center">{{ $fruta->nombre }}</td>
            <td class="text-center">{{ $fruta->temporada }}</td>
            <td class="text-center">{{ $fruta->precio }}</td>
            <td class="text-center">{{ $fruta->created_at }}</td>
        </tr>
    @endforeach
  </tbody>
</table>
