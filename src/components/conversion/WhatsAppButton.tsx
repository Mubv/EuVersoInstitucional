"use client";

import { MessageCircle } from "lucide-react";
import { buildWhatsAppHref, type WhatsAppOrigin } from "@/config/site";
import { trackEvent, type AnalyticsEventName } from "@/config/analytics";
import { useWhatsAppModal } from "./WhatsAppProvider";

interface WhatsAppButtonProps {
  origin: WhatsAppOrigin;
  label: string;
  variant?: "primary" | "primary-on-dark" | "secondary" | "secondary-on-dark" | "dark";
  customNote?: string;
  planName?: string;
  extraEvent?: AnalyticsEventName;
  className?: string;
  showIcon?: boolean;
}

const VARIANT_CLASS: Record<NonNullable<WhatsAppButtonProps["variant"]>, string> = {
  primary: "comic-btn-primary",
  "primary-on-dark": "comic-btn-primary-on-dark",
  secondary: "comic-btn-secondary",
  "secondary-on-dark": "comic-btn-secondary-on-dark",
  dark: "comic-btn-dark",
};

export function WhatsAppButton({
  origin,
  label,
  variant = "primary",
  customNote,
  planName,
  extraEvent,
  className = "",
  showIcon = true,
}: WhatsAppButtonProps) {
  const { openPreviewModal } = useWhatsAppModal();
  const href = buildWhatsAppHref(origin, customNote);

  const handleTrack = () => {
    trackEvent("whatsapp_click", {
      origin,
      label,
      plan: planName,
    });
    if (extraEvent) {
      trackEvent(extraEvent, {
        origin,
        label,
        plan: planName,
      });
    }
  };

  const buttonClasses = `${VARIANT_CLASS[variant]} ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleTrack}
        className={buttonClasses}
        data-wa-origin={origin}
      >
        {showIcon && <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />}
        <span>{label}</span>
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={() => {
        handleTrack();
        openPreviewModal(origin, customNote);
      }}
      className={buttonClasses}
      data-wa-origin={origin}
    >
      {showIcon && <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />}
      <span>{label}</span>
    </button>
  );
}
