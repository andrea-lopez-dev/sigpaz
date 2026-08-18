<?php

namespace App\Helpers;

use Illuminate\Support\Facades\DB;

class BooleanHelper
{
    /**
     * Convertir un valor booleano a DB::raw para PostgreSQL
     */
    public static function toDBRaw($value)
    {
        $bool = filter_var($value, FILTER_VALIDATE_BOOLEAN);
        return DB::raw($bool ? 'true' : 'false');
    }

    /**
     * Obtener un valor booleano para whereRaw
     */
    public static function whereCondition($value)
    {
        $bool = filter_var($value, FILTER_VALIDATE_BOOLEAN);
        return $bool ? 'true' : 'false';
    }
}
