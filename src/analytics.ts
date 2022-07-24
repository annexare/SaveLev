import { TCurrency } from './types'

export const GA_TRACKING_ID = process.env.NEXT_GA_ID || ''

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
// https://developers.google.com/analytics/devguides/collection/gtagjs/events
// @ts-ignore
export const gtag = () => (GA_TRACKING_ID && window.gtag ? window.gtag : () => {})

export const trackPageView = (url: string) => {
  gtag()('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

export interface IGAItem {
  item_id: string
  item_name: string
  item_category: TItemCategory
  currency: TCurrency
}

export interface IGASelectItemEvent {
  item_list_id: string
  item: IGAItem
}

export type TItemCategory = 'card' | 'cardinfo' | 'monojar' | 'paypal'

export const trackSelectEvent = (category: TItemCategory, item: IGAItem) => {
  gtag()('event', 'select_item', {
    item_list_id: category,
    items: [item],
  })
}

export interface IGACustomEvent {
  category: string
  label: string
  value: any
}

export const trackCustomEvent = (action: string, { category, label, value }: IGACustomEvent) => {
  gtag()('event', action, {
    event_category: category,
    event_label: label,
    value,
  })
}
