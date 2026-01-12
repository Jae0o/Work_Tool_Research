/**
 * 동적 Handle 위치 계산
 * n개 분기일 때 i번째 Handle 위치 = ((i + 1) / (n + 1)) * 100 %
 */
export const getHandlePosition = (index: number, total: number): string => {
  return `${((index + 1) / (total + 1)) * 100}%`;
};
