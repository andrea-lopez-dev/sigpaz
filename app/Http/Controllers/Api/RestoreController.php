<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\RestoreRequest;
use App\Services\Restore\RestoreService;
use App\Repositories\RestoreRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class RestoreController extends Controller
{
     private RestoreService $restoreService;
    private RestoreRepository $restoreRepository;

    public function __construct(
        RestoreService $restoreService,
        RestoreRepository $restoreRepository
    ) {
        $this->restoreService = $restoreService;
        $this->restoreRepository = $restoreRepository;
    }

    public function index(Request $request): JsonResponse
    {
        $perPage = $request->get('per_page', 15);
        $restores = $this->restoreRepository->paginate($perPage);

        return response()->json([
            'success' => true,
            'data' => $restores->items(),
            'meta' => [
                'current_page' => $restores->currentPage(),
                'per_page' => $restores->perPage(),
                'total' => $restores->total(),
                'last_page' => $restores->lastPage()
            ]
        ]);
    }

    public function store(RestoreRequest $request): JsonResponse
    {
        $result = $this->restoreService->startRestore($request->validated());

        if ($result['success']) {
            return response()->json($result['restore'], 201);
        }

        return response()->json([
            'success' => false,
            'message' => $result['message']
        ], 500);
    }

    public function show(int $id): JsonResponse
    {
        $restore = $this->restoreRepository->findById($id);

        if (!$restore) {
            return response()->json([
                'success' => false,
                'message' => 'Restauración no encontrada'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $restore
        ]);
    }

    public function getByBackup(int $backupId): JsonResponse
    {
        $restores = $this->restoreRepository->findByBackupId($backupId);

        return response()->json([
            'success' => true,
            'data' => $restores
        ]);
    }

    public function getProgress(int $id): JsonResponse
    {
        $progress = $this->restoreService->getProgress($id);

        return response()->json([
            'success' => true,
            'data' => $progress
        ]);
    }

    public function cancel(int $id): JsonResponse
    {
        $result = $this->restoreService->cancelRestore($id);

        if ($result['success']) {
            return response()->json([
                'success' => true,
                'message' => $result['message']
            ]);
        }

        return response()->json([
            'success' => false,
            'message' => $result['message']
        ], 500);
    }

    public function verifyCompatibility(Request $request): JsonResponse
    {
        $backupId = $request->get('backup_id');
        $compatible = $this->restoreService->verifyCompatibility($backupId);

        return response()->json([
            'success' => true,
            'compatible' => $compatible,
            'message' => $compatible ? 'Backup compatible' : 'Backup incompatible con el sistema actual'
        ]);
    }

    public function getStats(): JsonResponse
    {
        $totalRestores = $this->restoreRepository->count();
        $successfulRestores = $this->restoreRepository->countSuccessful();
        $failedRestores = $this->restoreRepository->countFailed();

        return response()->json([
            'success' => true,
            'data' => [
                'total' => $totalRestores,
                'successful' => $successfulRestores,
                'failed' => $failedRestores,
                'success_rate' => $totalRestores > 0
                    ? round(($successfulRestores / $totalRestores) * 100, 2)
                    : 100
            ]
        ]);
    }

    public function generateReport(): JsonResponse
    {
        $report = $this->restoreService->generateReport();

        return response()->json([
            'success' => true,
            'data' => $report
        ]);
    }
}
