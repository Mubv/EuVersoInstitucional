"use client";

export type AnalyticsEventName =
  | "hero_cta_click"
  | "hero_demo_interaction"
  | "feature_click"
  | "plan_click"
  | "whatsapp_click"
  | "scroll_depth";

export type ConsentStatus = "pending" | "accepted" | "rejected";

const CONSENT_STORAGE_KEY = "euverso_site_consent_v1";

export interface AnalyticsPayload {
  origin?: string;
  label?: string;
  plan?: string;
  scenario?: string;
  depth?: number;
  path?: string;
}

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    __euversoAnalyticsQueue?: Array<{
      event: AnalyticsEventName;
      timestamp: string;
      payload: AnalyticsPayload;
    }>;
  }
}

export function getStoredConsent(): ConsentStatus {
  if (typeof window === "undefined") return "pending";
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (raw === "accepted" || raw === "rejected") {
      return raw;
    }
    return "pending";
  } catch {
    return "pending";
  }
}

export function setStoredConsent(status: Exclude<ConsentStatus, "pending">): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, status);
    window.dispatchEvent(new CustomEvent("euverso:consent-changed", { detail: { status } }));
  } catch {
    // Armazenamento indisponível (modo privado restrito)
  }
}

/**
 * Registra eventos de conversão apenas quando o visitante aceita explicitamente
 * a medição conforme LGPD. Sem cookies de terceiros antes do consentimento.
 */
export function trackEvent(event: AnalyticsEventName, payload: AnalyticsPayload = {}): void {
  if (typeof window === "undefined") return;
  if (getStoredConsent() !== "accepted") return;

  const entry = {
    event,
    timestamp: new Date().toISOString(),
    payload: {
      ...payload,
      path: payload.path ?? window.location.pathname,
    },
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...entry.payload });

  window.__euversoAnalyticsQueue = window.__euversoAnalyticsQueue || [];
  window.__euversoAnalyticsQueue.push(entry);

  if (process.env.NEXT_PUBLIC_ANALYTICS_DEBUG === "true") {
    console.info("[EuVerso Analytics]", entry);
  }
}
