const isBrowser = typeof window !== "undefined";

export function pushDataLayerEvent(eventName, payload = {}) {
    if (!isBrowser) {
        return;
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: eventName,
        ...payload,
    });
}
