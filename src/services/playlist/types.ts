import { Image } from "../../types/types"
import { Album, Artist, ExternalUrls } from "../profile/track/types"

export interface Playlist {
  collaborative: boolean
  description: string
  external_urls: ExternalUrls
  followers: Followers
  href: string
  id: string
  images: Image[]
  name: string
  owner: Owner
  public: boolean
  snapshot_id: string
  tracks: Tracks
  type: string
  uri: string
}

export interface Followers {
  href: string
  total: number
}

export interface Owner {
  external_urls: ExternalUrls
  followers: Followers
  href: string
  id: string
  type: string
  uri: string
  display_name: string
}

export interface Tracks {
  href: string
  limit: number
  next: string
  offset: number
  previous: string
  total: number
  items: Item[]
}

export interface Item {
  added_at: string
  added_by: AddedBy
  is_local: boolean
  track: Track
}

export interface AddedBy {
  external_urls: ExternalUrls
  followers: Followers
  href: string
  id: string
  type: string
  uri: string
}

export interface Track {
  album: Album
  artists: Artist[]
  available_markets: string[]
  disc_number: number
  duration_ms: number
  explicit: boolean
  external_ids: ExternalIds
  external_urls: ExternalUrls
  href: string
  id: string
  is_playable: boolean
  linked_from: LinkedFrom
  restrictions: Restrictions
  name: string
  popularity: number
  preview_url: string
  track_number: number
  type: string
  uri: string
  is_local: boolean
}

export interface Restrictions {
  reason: string
}

export interface Copyright {
  text: string
  type: string
}

export interface ExternalIds {
  isrc: string
  ean: string
  upc: string
}

export interface LinkedFrom {}

export interface PlaylistCreateBody {
  name: string
  description: string
  public: boolean
}

export interface PlaylistAddTrackBody {
  uris: string[]
  position?: number
}
