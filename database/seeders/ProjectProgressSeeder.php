<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\ProjectProgress;

class ProjectProgressSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ProjectProgress::create([
            'name' => 'Planning',
        ]);
        ProjectProgress::create([
            'name' => 'Requirements Analysis',
        ]);
        ProjectProgress::create([
            'name' => 'Design',
        ]);
        ProjectProgress::create([
            'name' => 'Development',
        ]);
        ProjectProgress::create([
            'name' => 'Testing',
        ]);
        ProjectProgress::create([
            'name' => 'Maintenance',
        ]);
        ProjectProgress::create([
            'name' => 'Evaluation',
        ]);
    }
}
