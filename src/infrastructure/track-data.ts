export interface TrackData{
    version: number;
    tracks: Track[];
}

export interface Track{
    name: string;
    aiData: AiData[];
}

export interface AiData {
    time: number;
    difficulty: number;
}