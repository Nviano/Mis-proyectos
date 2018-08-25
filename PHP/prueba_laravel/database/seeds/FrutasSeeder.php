<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
Use taller_laravel\Frutas;
class FrutasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $faker = Faker::create();
        // for ($i=0; $i < 50; $i++) {
        //     \DB::table('frutas')->insert(array(
        //            'nombre' => $faker->name,
        //            'temporada'  => $faker->randomElement(['invierno','verano']),
        //            'precio' => $faker->numberBetween($min = 10, $max = 1000),
        //            'created_at' => date('Y-m-d H:m:s'),
        //            'updated_at' => date('Y-m-d H:m:s')
        //     ));
        // }
            factory(Frutas::class,50)->create();
    }
}
