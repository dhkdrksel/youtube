import datetime
from typing import Dict, Any, List

class KPIService:
    """
    KPI 데이터를 수집하고 계산하는 비즈니스 로직 서비스.
    데이터 정합성 및 KPI 연산의 책임을 가짐.
    """
    def __init__(self):
        # 현빈님의 API 스펙에 맞춰 필요한 외부 데이터 소스 연결 (예: A/B Test DB, GA API)
        pass

    def fetch_ab_test_data(self, experiment_id: str) -> Dict[str, Any]:
        """
        특정 실험 ID의 원본 데이터를 가상으로 가져오는 함수.
        실제 구현 시에는 외부 DB/API 호출 로직이 들어갑니다.
        """
        # 실제로는 여기에 데이터베이스 쿼리나 외부 API 호출 코드가 위치합니다.
        print(f"INFO: Fetching raw data for experiment {experiment_id}...")
        return {
            'A': {'views': 1000, 'conversions': 50, 'time_spent': 120},
            'B': {'views': 950, 'conversions': 60, 'time_spent': 140}
        }

    def calculate_kpis(self, raw_data: Dict[str, Any]) -> Dict[str, float]:
        """
        원본 데이터를 기반으로 핵심 KPI (전환율, 체류 시간 등)를 계산합니다.
        KPI = (Conversions / Views) * 100
        """
        kpis = {}

        # A 그룹 분석
        data_a = raw_data['A']
        views_a = data_a['views']
        conv_a = data_a['conversions']
        time_a = data_a['time_spent']
        
        kpis[f'conversion_rate_A'] = (conv_a / views_a) * 100 if views_a else 0.0
        kpis[f'avg_time_A'] = time_a / views_a if views_a else 0.0

        # B 그룹 분석
        data_b = raw_data['B']
        views_b = data_b['views']
        conv_b = data_b['conversions']
        time_b = data_b['time_spent']
        
        kpis[f'conversion_rate_B'] = (conv_b / views_b) * 100 if views_b else 0.0
        kpis[f'avg_time_B'] = time_b / views_b if views_b else 0.0
        
        return kpis

    def generate_dashboard_data(self, experiment_id: str) -> Dict[str, Any]:
        """
        대시보드에 필요한 모든 형태의 데이터를 통합하여 반환합니다. (단일 책임 원칙 준수)
        """
        raw_data = self.fetch_ab_test_data(experiment_id)
        kpis = self.calculate_kpis(raw_data)

        # 최종 결과 포맷팅
        result = {
            "metadata": {
                "last_updated": datetime.datetime.now().isoformat(),
                "experiment_id": experiment_id,
                "status": "SUCCESS"
            },
            "kpi_metrics": kpis,
            "raw_data_summary": raw_data # 디버깅 및 투명성을 위해 원본 데이터 요약 포함
        }
        return result

# 테스트 코드: 이 파일이 모듈로 사용됨을 전제합니다.
if __name__ == '__main__':
    service = KPIService()
    test_result = service.generate_dashboard_data("ab-test-v1")
    import json
    print("\n--- KPI Service Test Result ---")
    print(json.dumps(test_result, indent=4))