import geographicData from "./../../data/GeographicAreas.json";

const convertGeographicArea = (geographicArea: string): string => {

    const ids = geographicArea.split('/').filter(id => id);

    if (ids.length === 0) return 'Unknown';

    const country = geographicData.find(item => item.Id === ids[0]);
    if (!country) return 'Unknown';

    const state = country.Children.find(item => item.Id === ids[1]);
    if (!state) return country.Name;

    return `${country.Name} / ${state.Name}`;
};

const parseWellStatus = (status: number): string => {
    const WellStatus = [
        'Active',
        'InActive',
        'PluggedAndAbandoned',
        'Reclaimed',
        'Abandoned',
        'AbandonedAndReEntered'
    ];

    return WellStatus[status] || 'Unknown';
};

export { convertGeographicArea, parseWellStatus };