<?php

use Faker\Generator as Faker;

$factory->define(taller_laravel\Frutas::class, function (Faker $faker) {
    return [
        'nombre' => $faker->name,
        'temporada'  => $faker->randomElement(['invierno','verano']),
        'precio' => $faker->numberBetween($min = 10, $max = 1000)
    ];
});
