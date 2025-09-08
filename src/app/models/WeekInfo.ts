import { Sources } from "./Sources";

export interface WeekInfo {
    columnsName: string[];
    linesData: LineDayForecastData[];  
}

export interface LineDayForecastData {
    dayX: number, 
    forecastWasMade: number,
    forecastsDayInfoCards: DayForecastDataCard[]
}

export interface DayForecastDataCard{
    dayCode: number,
    items: DayForecastDataItem[]
}

export interface DayForecastDataItem{
    sources: Sources,
    minTemperature: number,
    maxTemperature: number,
    description: string,
}