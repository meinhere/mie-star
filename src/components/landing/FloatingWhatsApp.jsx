import React from "react";

const DEFAULT_PHONE = "6282119998808";

function WhatsAppIcon({ className = "" }) {
    return (
        <svg
            viewBox="0 0 32 32"
            aria-hidden="true"
            className={className}
            fill="currentColor"
        >
            <path d="M16 3C8.832 3 3 8.832 3 16c0 2.56.75 5.037 2.171 7.17L3.25 28.75l5.727-1.88A12.95 12.95 0 0016 29c7.168 0 13-5.832 13-13S23.168 3 16 3zm0 23.818a10.76 10.76 0 01-5.47-1.49l-.392-.232-3.397 1.115 1.109-3.312-.255-.404A10.77 10.77 0 015.182 16c0-5.965 4.853-10.818 10.818-10.818S26.818 10.035 26.818 16 21.965 26.818 16 26.818zm5.93-8.183c-.324-.162-1.914-.944-2.21-1.052-.296-.108-.512-.162-.728.162-.216.324-.836 1.052-1.024 1.268-.188.216-.377.243-.7.081-.324-.162-1.367-.503-2.603-1.604-.961-.857-1.61-1.914-1.798-2.238-.188-.324-.02-.499.142-.66.146-.145.324-.378.486-.567.162-.189.216-.324.324-.54.108-.216.054-.405-.027-.567-.081-.162-.728-1.755-.997-2.406-.262-.628-.529-.543-.728-.553l-.621-.011c-.216 0-.567.081-.863.405-.296.324-1.132 1.106-1.132 2.697 0 1.59 1.159 3.126 1.32 3.342.162.216 2.28 3.48 5.523 4.88.771.333 1.372.532 1.842.681.774.246 1.478.211 2.035.128.62-.092 1.914-.782 2.183-1.536.27-.755.27-1.401.189-1.536-.081-.135-.297-.216-.621-.378z" />
        </svg>
    );
}

export default function FloatingWhatsApp({
    phoneNumber = DEFAULT_PHONE,
    message = "Halo Mie Star, saya ingin tanya terkait franchise.",
}) {
    const href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div className="fixed bottom-5 right-5 z-50">
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hubungi kami lewat WhatsApp"
                className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(37,211,102,0.5)] transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
            >
                <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" />
                <WhatsAppIcon className="relative h-7 w-7" />
            </a>
        </div>
    );
}
