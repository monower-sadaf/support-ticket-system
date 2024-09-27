<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        "name",
        "description",
        "start_date",
        "end_date",
        "duration",
        "project_progress_id",
        "status"
    ];

    public function project_progress()
    {
        return $this->belongsTo(ProjectProgress::class);
    }
}
