export enum Sources {
    ADVISOR = 0,
    HGBrasil = 1
}

export const ForecastSourceNames: Record<number, string> = {
  [Sources.ADVISOR.valueOf()]: 'Advisor',
  [Sources.HGBrasil.valueOf()]: 'HG Brasil'
};