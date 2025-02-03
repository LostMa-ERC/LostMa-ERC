type EventDataType = {
    title: string
    date: string
    venue: string
    city: string
    description: string
    image: string | null
    link: EventLinkType | null
}

type EventLinkType = {
    page: boolean
    label: string
    url: string
}

export type { EventDataType, EventLinkType };