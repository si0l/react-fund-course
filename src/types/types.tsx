export type AppState = {
    header: string,
}

export type AppProps = {
    header: string
}

export type HeaderState = {
    header: string,
}

export type HeaderProps = {
    header: string
}

export type SeriesState = {
    series: Array<SeriesRecord>,
}

export type SeriesRecord = {
    show: {
        name: string,
        id: number,
    }
}

export type SeriesProps = {
}
