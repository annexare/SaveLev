import { TCurrency } from './types'

export const GA_TRACKING_ID = process.env.NEXT_GA_ID || ''

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
// https://developers.google.com/analytics/devguides/collection/gtagjs/events

export const trackPageView = (url: string) => {
  // @ts-ignore
  window.gtag('event', 'page_view', {
    page_path: url,
  })
}

export interface IGAItem {
  item_id: string
  item_name: string
  item_category: TItemCategory
  currency?: TCurrency
}

export interface IGASelectItemEvent {
  item_list_id: string
  item: IGAItem
}

export type TItemCategory = 'card' | 'cardinfo' | 'info' | 'monojar' | 'paypal'

export const trackSelectItemEvent = (category: TItemCategory, item: IGAItem) => {
  // @ts-ignore
  window.gtag('event', 'select_item', {
    item_list_id: category,
    items: [item],
  })
}

export const trackViewDetailsEvent = (item: IGAItem) => {
  // @ts-ignore
  window.gtag('event', 'view_details', item)
}

export interface IGACustomEvent {
  category: string
  label: string
  value: any
}

export const trackCustomEvent = (action: string, { category, label, value }: IGACustomEvent) => {
  // @ts-ignore
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  })
}
