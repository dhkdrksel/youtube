from fastapi import APIRouter, Depends
from pydantic import BaseModel
from typing import List

router = APIRouter()

# --- 데이터 모델 정의 (현빈님의 스펙 기반) ---
class ConversionRate(BaseModel):
    cvr_value: float  # 예시: 0.025 (2.5%)
    change_week: str # "↑ 1.2%" 등 변화 추이

class DeepEngagementRate(BaseModel):
    der_score: float
    average_time_minutes: float

class AttributionScore(BaseModel):
    top_content_id: str
    contribution_score: float
    suggested_action: str # "CTA 버튼 개선 필요" 등 비즈니스 액션 제안

# 핵심 KPI 응답 모델
class KpiDashboardData(BaseModel):
    """대시보드에 필요한 모든 핵심 지표를 담는 통합 데이터 구조."""
    timestamp: str = "2026-06-05T13:00:00Z"
    session_count: int # 총 유입 세션 수 (전체 트래픽)
    conversion_rate: ConversionRate
    deep_engagement_rate: DeepEngagementRate
    attribution_score: AttributionScore

# --- 엔드포인트 정의 ---
@router.get("/kpi_data", response_model=KpiDashboardData, summary="핵심 운영 KPI 데이터 조회")
async def get_kpi_dashboard_data():
    """
    A/B 테스트 및 콘텐츠 성과 분석에 필요한 핵심 지표 데이터를 통합하여 반환합니다.
    실제 환경에서는 DB에서 최신 데이터를 쿼리하고 로직을 수행해야 합니다.
    (현재는 더미 데이터로 구조만 검증)
    """
    # [TODO] 실제 DB 연결 및 복잡한 분석 로직 구현 필요 (가중치 적용, 시간 집계 등)
    dummy_data = KpiDashboardData(
        timestamp="2026-06-05T13:00:00Z",
        session_count=12450, # 예시 값
        conversion_rate=ConversionRate(cvr_value=0.025, change_week="↑ 1.2%"),
        deep_engagement_rate=DeepEngagementRate(der_score=0.78, average_time_minutes=3.2),
        attribution_score=AttributionScore(top_content_id="sep_efficiency_test", contribution_score=850.5, suggested_action="실험 장비의 명확한 시각화 강화 필요")
    )
    return dummy_data

# 추가적인 데이터 엔드포인트도 고려할 수 있습니다:
@router.get("/kpi_trend/{metric}:", summary="특정 KPI의 시간 흐름별 추이 조회")
async def get_kpi_trend(metric: str):
    """KPI의 과거 7일/30일 트렌드 데이터를 반환합니다."""
    # ... 구현 예정
    pass