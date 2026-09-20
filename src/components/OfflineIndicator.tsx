"use client";

import { useSyncExternalStore, useState, useEffect, useRef } from "react";
import { WifiOff, Wifi } from "lucide-react";

// Subscribe to navigator.onLine using useSyncExternalStore (React recommended pattern)
function useOnlineStatus() {
  return useSyncExternalStore(
    (callback) => {
      window.addEventListener("online", callback);
      window.addEventListener("offline", callback);
      return () => {
        window.removeEventListener("online", callback);
        window.removeEventListener("offline", callback);
      };
    },
    () => navigator.onLine,
    () => true // server snapshot: assume online
  );
}

export default function OfflineIndicator() {
  const isOnline = useOnlineStatus();
  const [dismissed, setDismissed] = useState(false);
  const [showBackOnline, setShowBackOnline] = useState(false);
  const prevOnline = useRef(true); // track previous state
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Detect transitions (online -> offline or offline -> online)
  // This is a legitimate external system subscription (navigator.onLine)
  useEffect(() => {
    if (!isOnline) {
      // Just went offline — reset dismissed so banner shows again
      setDismissed(false); // eslint-disable-line react-hooks/set-state-in-effect
    } else if (!prevOnline.current && isOnline) {
      // Just came back online — briefly show "back online" toast
      setShowBackOnline(true);
      timerRef.current = setTimeout(() => setShowBackOnline(false), 3000);
    }
    prevOnline.current = isOnline;
  }, [isOnline]);

  const isOffline = !isOnline;
  // Show when: offline and not dismissed, OR showing "back online" briefly
  const visible = (isOffline && !dismissed) || showBackOnline;

  if (!visible) return null;

  return (
    <div
      className={`fixed top-20 left-1/2 -translate-x-1/2 z-[70] px-4 py-2.5 rounded-xl shadow-lg border backdrop-blur-xl transition-all duration-500 flex items-center gap-2.5 ${
        isOffline
          ? "bg-red-500/10 border-red-500/30 text-red-400"
          : "bg-green-500/10 border-green-500/30 text-green-400"
      }`}
      role="status"
      aria-live="polite"
    >
      {isOffline ? (
        <>
          <WifiOff className="w-4 h-4" />
          <span className="text-sm font-medium">You&apos;re offline — cached content available</span>
        </>
      ) : (
        <>
          <Wifi className="w-4 h-4" />
          <span className="text-sm font-medium">Back online</span>
        </>
      )}
      {isOffline && (
        <button
          onClick={() => setDismissed(true)}
          className="ml-2 text-xs text-text-muted hover:text-text-primary transition-colors"
          aria-label="Dismiss"
        >
          ✕
        </button>
      )}
    </div>
  );
}
