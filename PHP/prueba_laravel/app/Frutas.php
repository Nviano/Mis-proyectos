<?php

namespace taller_laravel;

use Illuminate\Database\Eloquent\Model;

class Frutas extends Model
{
 protected $table = 'frutas';
 protected $fillable = [
    'nombre','temporada','precio','updated_at'
 ];

 protected $hidden = [
     'id','created_at'];


}
