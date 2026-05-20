import { useEffect, useRef, useState } from 'react'
import { MapPin } from 'lucide-react'
import { siteConfig } from '../lib/site'

type LatLngLiteral = {
  lat: number
  lng: number
}

type MapStyle = {
  featureType?: string
  elementType?: string
  stylers: Array<Record<string, string | number>>
}

type GoogleMapOptions = {
  center: LatLngLiteral
  zoom: number
  disableDefaultUI: boolean
  zoomControl: boolean
  styles: MapStyle[]
}

type GoogleMapInstance = object
type GoogleLatLng = object
type GoogleMapPoint = {
  x: number
  y: number
}

type GoogleMapOverlayView = {
  setMap: (map: GoogleMapInstance | null) => void
  getPanes: () => { overlayMouseTarget: HTMLElement } | null
  getProjection: () => {
    fromLatLngToDivPixel: (position: GoogleLatLng) => GoogleMapPoint | null
  } | null
  onAdd: () => void
  draw: () => void
  onRemove: () => void
}

type MarkerOptions = {
  position: LatLngLiteral
  map: GoogleMapInstance
  title: string
}

type GoogleMapsGlobal = {
  maps: {
    Map: new (element: HTMLElement, options: GoogleMapOptions) => GoogleMapInstance
    Marker: new (options: MarkerOptions) => object
    LatLng: new (lat: number, lng: number) => GoogleLatLng
    OverlayView: new () => GoogleMapOverlayView
  }
}

declare global {
  interface Window {
    google?: GoogleMapsGlobal
  }
}

const sunburyCoordinates = {
  lat: -37.5796,
  lng: 144.7286,
}

const darkMapStyles: MapStyle[] = [
  { elementType: 'geometry', stylers: [{ color: '#111827' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#dbeafe' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#020617' }] },
  {
    featureType: 'administrative',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#1d4ed8' }],
  },
  {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [{ color: '#0f172a' }],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [{ color: '#172554' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ color: '#1e3a8a' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#020617' }],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#020617' }],
  },
]

let googleMapsScriptPromise: Promise<void> | null = null

function loadGoogleMaps(apiKey: string): Promise<void> {
  if (window.google?.maps) {
    return Promise.resolve()
  }

  if (!googleMapsScriptPromise) {
    googleMapsScriptPromise = new Promise((resolve, reject) => {
      const existingScript = document.querySelector<HTMLScriptElement>(
        'script[data-google-maps-script]',
      )

      if (existingScript) {
        existingScript.addEventListener('load', () => resolve())
        existingScript.addEventListener('error', () => reject())
        return
      }

      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`
      script.async = true
      script.defer = true
      script.dataset.googleMapsScript = 'true'
      script.addEventListener('load', () => resolve())
      script.addEventListener('error', () => reject())
      document.head.appendChild(script)
    })
  }

  return googleMapsScriptPromise
}

function addSunburyPinOverlay(map: GoogleMapInstance): GoogleMapOverlayView | null {
  if (!window.google?.maps) {
    return null
  }

  const overlay = new window.google.maps.OverlayView()
  const marker = document.createElement('div')
  marker.setAttribute('aria-label', 'Sunbury, Victoria')
  marker.innerHTML = `
    <div style="
      position: relative;
      width: 34px;
      height: 34px;
      transform: translate(-50%, -100%);
      filter: drop-shadow(0 10px 18px rgba(2, 6, 23, 0.45));
    ">
      <div style="
        position: absolute;
        inset: 0;
        background: #1f6fd6;
        border: 3px solid #ffffff;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
      "></div>
      <div style="
        position: absolute;
        left: 50%;
        top: 50%;
        width: 9px;
        height: 9px;
        background: #ffffff;
        border-radius: 999px;
        transform: translate(-50%, -50%);
      "></div>
    </div>
  `
  marker.style.position = 'absolute'
  marker.style.zIndex = '20'

  overlay.onAdd = () => {
    overlay.getPanes()?.overlayMouseTarget.appendChild(marker)
  }

  overlay.draw = () => {
    const projection = overlay.getProjection()
    const point = projection?.fromLatLngToDivPixel(
      new window.google!.maps.LatLng(sunburyCoordinates.lat, sunburyCoordinates.lng),
    )

    if (!point) {
      return
    }

    marker.style.left = `${point.x}px`
    marker.style.top = `${point.y}px`
  }

  overlay.onRemove = () => {
    marker.remove()
  }

  overlay.setMap(map)

  return overlay
}

export default function GoogleMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [hasError, setHasError] = useState(false)
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

  useEffect(() => {
    if (!apiKey || !mapRef.current) {
      return
    }

    let cancelled = false
    let sunburyPinOverlay: GoogleMapOverlayView | null = null

    loadGoogleMaps(apiKey)
      .then(() => {
        if (cancelled || !mapRef.current || !window.google?.maps) {
          return
        }

        const map = new window.google.maps.Map(mapRef.current, {
          center: sunburyCoordinates,
          zoom: 10,
          disableDefaultUI: true,
          zoomControl: true,
          styles: darkMapStyles,
        })

        new window.google.maps.Marker({
          position: sunburyCoordinates,
          map,
          title: `${siteConfig.name} - ${siteConfig.location}`,
        })
        sunburyPinOverlay = addSunburyPinOverlay(map)
      })
      .catch(() => setHasError(true))

    return () => {
      cancelled = true
      sunburyPinOverlay?.setMap(null)
    }
  }, [apiKey])

  if (!apiKey || hasError) {
    return (
      <div className="flex h-full min-h-56 flex-col justify-center p-6 text-white">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-(--color-accent-light)">
          Google Map
        </p>
        <p className="mt-3 text-sm font-semibold leading-6 text-white/72">
          Add a valid <span className="font-black text-white">VITE_GOOGLE_MAPS_API_KEY</span>{' '}
          with Maps JavaScript API enabled to show the dark Sunbury map.
        </p>
      </div>
    )
  }

  return (
    <div className="relative h-full min-h-56">
      <div ref={mapRef} className="h-full min-h-56 w-full" />
      <div className="pointer-events-none absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-(--color-surface)/90 px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-white shadow-xl">
        <MapPin size={14} className="text-(--color-accent-light)" />
        Sunbury, VIC
      </div>
    </div>
  )
}
