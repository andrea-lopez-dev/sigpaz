<?php

namespace App\DTOs\Auditoria;

class LogAuditoriaDTO
{
    public function __construct(
        public readonly ?int $usuario_id,
        public readonly string $accion,
        public readonly string $tabla_afectada,
        public readonly ?int $registro_id,
        public readonly string $descripcion,
        public readonly ?string $ip_origen,
        public readonly ?string $user_agent,
        public readonly ?string $transaccion_id,
        public readonly ?array $datos_anteriores,
        public readonly ?array $datos_nuevos,
        public readonly string $esquema = 'public',
        public readonly ?string $query = null,
        public readonly string $nivel = 'INFO'
    ) {}

    public static function fromArray(array $data): self
    {
        return new self(
            usuario_id: $data['usuario_id'] ?? null,
            accion: $data['accion'],
            tabla_afectada: $data['tabla_afectada'],
            registro_id: $data['registro_id'] ?? null,
            descripcion: $data['descripcion'],
            ip_origen: $data['ip_origen'] ?? null,
            user_agent: $data['user_agent'] ?? null,
            transaccion_id: $data['transaccion_id'] ?? null,
            datos_anteriores: $data['datos_anteriores'] ?? null,
            datos_nuevos: $data['datos_nuevos'] ?? null,
            esquema: $data['esquema'] ?? 'public',
            query: $data['query'] ?? null,
            nivel: $data['nivel'] ?? 'INFO'
        );
    }

    public function toArray(): array
    {
        return [
            'usuario_id' => $this->usuario_id,
            'accion' => $this->accion,
            'tabla_afectada' => $this->tabla_afectada,
            'registro_id' => $this->registro_id,
            'descripcion' => $this->descripcion,
            'ip_origen' => $this->ip_origen,
            'user_agent' => $this->user_agent,
            'transaccion_id' => $this->transaccion_id,
            'datos_anteriores' => $this->datos_anteriores,
            'datos_nuevos' => $this->datos_nuevos,
            'esquema' => $this->esquema,
            'query' => $this->query,
            'nivel' => $this->nivel,
            'fecha' => now()
        ];
    }
}
