<?php

namespace App\Services\Backup;

use Illuminate\Support\Facades\File;
use ZipArchive;

class CompressionService
{
    public function compress(string $sourcePath, int $level = 5): string
    {
        $destinationPath = $sourcePath . '.zip';

        $zip = new ZipArchive();
        if ($zip->open($destinationPath, ZipArchive::CREATE | ZipArchive::OVERWRITE) === true) {
            $this->addFilesToZip($zip, $sourcePath);
            $zip->close();
        }

        // Eliminar directorio original después de comprimir
        if (is_dir($sourcePath)) {
            File::deleteDirectory($sourcePath);
        }

        return $destinationPath;
    }

    private function addFilesToZip(ZipArchive $zip, string $directory, string $relativePath = ''): void
    {
        $files = File::files($directory);

        foreach ($files as $file) {
            $zip->addFile($file->getRealPath(), $relativePath . $file->getFilename());
        }

        $directories = File::directories($directory);

        foreach ($directories as $subDirectory) {
            $subDirectoryName = basename($subDirectory);
            $this->addFilesToZip($zip, $subDirectory, $relativePath . $subDirectoryName . '/');
        }
    }

    public function decompress(string $zipPath, string $destinationPath): bool
    {
        $zip = new ZipArchive();
        if ($zip->open($zipPath) === true) {
            $zip->extractTo($destinationPath);
            $zip->close();
            return true;
        }

        return false;
    }
}
