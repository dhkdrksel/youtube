import React, { useEffect, useState } from 'react';
// NOTE: 실제 환경에서는 API 호출에 필요한 라이브러리(axios 등) 임포트가 필요합니다.

/**
 * @description 핵심 KPI 데이터를 가져와 시각화하는 대시보드 피드 컴포넌트 (Skeleton)
 * 이 컴포넌트는 백엔드의 /api/v1/kpi_data 엔드포인트를 호출하는 역할을 합니다.
 */
const DashboardDataFeed: React.FC = () => {
    // --- Type Definitions (Backend Schema를 참조하여 작성) ---
    interface ConversionRate { cvr_value: number; change_week: string; }
    interface DeepEngagementRate { der_score: number; average_time_minutes: number; }
    interface AttributionScore { top_content_id: string; contribution_score: number; suggested_action: string; }

    interface KpiDashboardData {
        timestamp: string;
        session_count: number;
        conversion_rate: ConversionRate;
        deep_engagement_rate: DeepEngagementRate;
        attribution_score: AttributionScore;
    }

    const [kpiData, setKpiData] = useState<KpiDashboardData | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);
            try {
                // TODO: 실제 API 호출 로직으로 변경 필요 (예: axios.get('http://localhost:8000/api/v1/kpi_data'))
                console.log("🚨 WARNING: Using Mock Data for Skeleton Test.");
                await new Promise(resolve => setTimeout(resolve, 500)); // API 지연 시뮬레이션

                // Step 1에서 생성한 더미 데이터 구조를 사용합니다.
                const mockData: KpiDashboardData = {
                    timestamp: "2026-06-05T13:00:00Z",
                    session_count: 12450,
                    conversion_rate: { cvr_value: 0.025, change_week: "↑ 1.2%" },
                    deep_engagement_rate: { der_score: 0.78, average_time_minutes: 3.2 },
                    attribution_score: { top_content_id: "sep_efficiency_test", contribution_score: 850.5, suggested_action: "실험 장비의 명확한 시각화 강화 필요" }
                };

                setKpiData(mockData);
            } catch (err) {
                console.error("Failed to fetch KPI data:", err);
                setError("KPI 데이터를 불러오는 데 실패했습니다. 백엔드 API를 확인해 주세요.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) return <div className="p-6 text-center">⚙️ 핵심 지표 데이터를 로딩 중입니다...</div>;
    if (error) return <div className="p-6 bg-red-100 border border-red-400 text-red-700">{error}</div>;

    const { session_count, conversion_rate, deep_engagement_rate, attribution_score } = kpiData;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* 1. CVR 카드 */}
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-indigo-500/70">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Conversion Rate (CVR)</h3>
                <p className="mt-1 text-3xl font-bold text-indigo-600">{Math.round(conversion_rate.cvr_value * 100)}%</p>
                <div className={`text-sm mt-2 inline-block px-3 py-1 rounded-full ${conversion_rate.change_week.includes('↑') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {conversion_rate.change_week} (주간 변화)
                </div>
            </div>

            {/* 2. DER 카드 */}
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-teal-500/70">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Deep Engagement Rate (DER)</h3>
                <p className="mt-1 text-3xl font-bold text-teal-600">{Math.round(deep_engagement_rate.der_score * 100)}%</p>
                <p className="text-gray-500 mt-2">평균 체류 시간: {deep_engagement_rate.average_time_minutes}분</p>
            </div>

             {/* 3. Traffic & Source 카드 */}
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-yellow-500/70">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">총 유입 세션 수 (Traffic)</h3>
                <p className="mt-1 text-3xl font-bold text-yellow-600">{session_count.toLocaleString()} 건</p>
                 <div className="text-xs mt-2 text-gray-400">KPI 분석 기준 시점</div>
            </div>

             {/* 4. Attribution Score (분리하여 배치) */}
            <div className="col-span-full bg-white p-6 rounded-lg shadow border-t-4 border-orange-500/70 mt-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
                    <span className='mr-2'>🏆</span> 기여도 분석 (Attribution Score)
                </h3>
                 <p className="text-lg text-orange-600">{attribution_score.top_content_id} 콘텐츠가 가장 큰 기여를 했습니다.</p>
                <div className="flex justify-between items-center mt-2">
                    <span className="text-xl font-bold text-gray-700">점수: {Math.round(attribution_score.contribution_score)}</span>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded transition duration-150 shadow">
                        {attribution_score.suggested_action}
                    </button>
                </div>
            </div>

        </div>
    );
};

export default DashboardDataFeed;