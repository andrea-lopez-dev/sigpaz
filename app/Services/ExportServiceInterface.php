<?php

namespace App\Services;

use App\DTOs\ExportDTO;
use Symfony\Component\HttpFoundation\BinaryFileResponse;

interface ExportServiceInterface
{
    public function export(ExportDTO $dto): BinaryFileResponse;
    public function scheduleExport(ExportDTO $dto): array;
    public function getExportFormats(): array;
    public function generatePreview(ExportDTO $dto): array;
}
